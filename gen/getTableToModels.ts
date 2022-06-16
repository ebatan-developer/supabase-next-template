// @ts-ignore
import {PrismaClient} from '@prisma/client';
import * as fs from 'fs';
import * as prettier from 'prettier';

// 必要なら別ディレクトリに持っていく
const modelDir = 'supabase-db-models';
const schemaName = 'public';

const upper = (value: string) => value[0].toUpperCase() + value.slice(1);
const modelDefault = (
  tableName: string,
  columns: {column: string; type: string}[]
) => `import {SupabaseDbService} from "../supabaseDbService";
import {definitions} from "../../../types/supabase/supabase-types";
${
  columns.length
    ? `
/**
 * ** [${tableName} columns] **
${columns.map(c => ` * [${c.column}]: ${c.type}`).join('\n')}
 */
`
    : ''
}
export class Supabase${upper(tableName)}Model extends SupabaseDbService<definitions['${tableName}']> {
  constructor() {
    super('${tableName}');
  }
  public static createInstance = () => new this()
}
`;

const format = (value: string) =>
  prettier.format(value, {
    parser: 'typescript',
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: false,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',
  });
/**
 * .envにあるtableからModelとコメントを生成する
 */
(async () => {
  const prisma = new PrismaClient();
  try {
    const data = (await prisma.$queryRaw`SELECT * FROM pg_tables;`) as {schemaname: string; tablename: string}[];
    const targetTables = data
      .filter(d => d.schemaname === schemaName && !d.tablename.startsWith('_'))
      .map(table => table.tablename);
    for (const tableName of targetTables) {
      const query =
        (await prisma.$queryRaw`select * from information_schema.columns where table_name = ${tableName} and table_schema = ${schemaName}`) as any[];
      const column = query.map((q: Record<string, string>) => ({
        column: q.column_name,
        type: q.data_type,
      }));
      const fileName = `supabase${upper(tableName)}Model.ts`;
      const path = `${modelDir}/${fileName}`;
      const exist = fs.existsSync(path);
      if (exist) {
        console.log(`[Skip]: ${path} is already exist.`);
        continue;
      }
      const fileData = format(modelDefault(tableName, column));
      await fs.writeFileSync(path, fileData);
      console.log(`[Success]: ${path} write success!`);
    }
  } catch (e) {
    console.log(`エラーが発生しました。`, e);
  } finally {
    prisma.$disconnect();
  }
})();

import {PrismaClient} from '@prisma/client';

export class CreateSeedData {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }
  public static init = () => new CreateSeedData();
  public exec = async () => {
    this.handler().finally(async () => {
      this.db?.$disconnect();
    });
  };

  private handler = async () => {
    await this.seedPrefecturesAndAssociations();
  };

  private seedPrefecturesAndAssociations = async () => {
    const createdAssociations = await this.db?.$transaction(
      associations.map(association =>
        this.db?.associations?.create({
          data: {
            name: association.name,
            code: association.code,
          },
        })
      )
    );
    await this.db?.$transaction(
      seedPrefectures.map(prefecture => {
        const targetAssociationCodes = associations
          .filter(association => association.prefectures.includes(prefecture.code))
          .map(a => a.code);
        const targetCreatedAssociation = createdAssociations.find(a => targetAssociationCodes.includes(a.code));
        return this.db.prefectures.create({
          data: {
            code: prefecture.code,
            name: prefecture.name,
            association: {
              connect: {id: targetCreatedAssociation?.id ?? ''},
            },
          },
        });
      })
    );
  };
}

const associations = [
  {code: 100, name: '北海道サッカー協会', prefectures: [1]},
  {code: 101, name: '東北サッカー協会', prefectures: [2, 3, 4, 5, 6, 7]},
  {code: 102, name: '関東サッカー協会', prefectures: [8, 9, 10, 11, 12, 13, 14, 19]},
  {code: 103, name: '北信越サッカー協会', prefectures: [15, 16, 17, 18, 20]},
  {code: 104, name: '東海サッカー協会', prefectures: [21, 22, 23, 24]},
  {code: 105, name: '関西サッカー協会', prefectures: [25, 26, 27, 28, 29, 30]},
  {code: 106, name: '中国サッカー協会', prefectures: [31, 32, 33, 34, 35]},
  {code: 107, name: '四国サッカー協会', prefectures: [36, 37, 38, 39]},
  {code: 108, name: '九州サッカー協会', prefectures: [40, 41, 42, 43, 44, 45, 46, 47]},
];
const seedPrefectures = [
  {code: 1, name: '北海道'},
  {code: 2, name: '青森県'},
  {code: 3, name: '岩手県'},
  {code: 4, name: '宮城県'},
  {code: 5, name: '秋田県'},
  {code: 6, name: '山形県'},
  {code: 7, name: '福島県'},
  {code: 8, name: '茨城県'},
  {code: 9, name: '栃木県'},
  {code: 10, name: '群馬県'},
  {code: 11, name: '埼玉県'},
  {code: 12, name: '千葉県'},
  {code: 13, name: '東京都'},
  {code: 14, name: '神奈川県'},
  {code: 15, name: '新潟県'},
  {code: 16, name: '富山県'},
  {code: 17, name: '石川県'},
  {code: 18, name: '福井県'},
  {code: 19, name: '山梨県'},
  {code: 20, name: '長野県'},
  {code: 21, name: '岐阜県'},
  {code: 22, name: '静岡県'},
  {code: 23, name: '愛知県'},
  {code: 24, name: '三重県'},
  {code: 25, name: '滋賀県'},
  {code: 26, name: '京都府'},
  {code: 27, name: '大阪府'},
  {code: 28, name: '兵庫県'},
  {code: 29, name: '奈良県'},
  {code: 30, name: '和歌山県'},
  {code: 31, name: '鳥取県'},
  {code: 32, name: '島根県'},
  {code: 33, name: '岡山県'},
  {code: 34, name: '広島県'},
  {code: 35, name: '山口県'},
  {code: 36, name: '徳島県'},
  {code: 37, name: '香川県'},
  {code: 38, name: '愛媛県'},
  {code: 39, name: '高知県'},
  {code: 40, name: '福岡県'},
  {code: 41, name: '佐賀県'},
  {code: 42, name: '長崎県'},
  {code: 43, name: '熊本県'},
  {code: 44, name: '大分県'},
  {code: 45, name: '宮崎県'},
  {code: 46, name: '鹿児島県'},
  {code: 47, name: '沖縄県'},
];
CreateSeedData.init().exec();

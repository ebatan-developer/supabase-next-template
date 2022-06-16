require('dotenv').config()
const {exec} = require('child_process')
export const _handler = async () => {
  const command = `npx openapi-typescript "${process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL}/rest/v1/?apikey=${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}" --export-type --output src/types/supabase/supabase-types.ts`
  console.log(`exec(${command})`)
  exec(command)
}
_handler()

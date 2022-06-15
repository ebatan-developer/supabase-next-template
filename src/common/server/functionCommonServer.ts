import {Env} from '@next/env';
import {PreviewData} from 'next/types';

export type NextRequest<
  RequestBody extends Record<string, any>,
  RequestQuery extends Record<string, string | string[]>
> = {
  query: RequestQuery;
  cookies: {
    [key: string]: string;
  };
  body: RequestBody;
  env: Env;
  preview?: boolean;
  previewData?: PreviewData;
};

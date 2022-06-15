import React, {useCallback, useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@mui/material';
import {FirestorePagingQuery} from '../../firestore/firestoreActionCommon';
import {CoreTypes} from 'core-types/lib/common/firestore/firestoreCommonType';
import {ContentsWrapper} from '../wrappers/ContentsWrapper';
import {Property} from 'csstype';

export type TableHeader = {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  width?: Property.Width;
};
type TableProps<T extends CoreTypes> = {
  firestorePaging: FirestorePagingQuery<T>;
  rowConverter?: (rows: T[]) => Promise<any[]>;
  headers: TableHeader[];
};

// WTable自体はanyで良き
export const WTable = React.memo<TableProps<any>>(props => {
  const [rows, setRows] = useState<any[][]>([]);

  const headersToRow = useCallback(
    (rows: any[]) => {
      return rows.map(row => props.headers.map(header => row[header.key]));
    },
    [props.headers]
  );

  const rowRender = useCallback(
    async (rows: any[]) => {
      const convRows = props.rowConverter ? await props.rowConverter(rows) : rows;
      setRows(headersToRow(convRows));
    },
    [headersToRow, props]
  );

  const onFirstRender = useCallback(async () => {
    const firstRows = await props.firestorePaging.firstQuery();
    await rowRender(firstRows);
  }, [props.firestorePaging, rowRender]);

  const handleChangePage = useCallback(
    async (_, newPage: number) => {
      if (newPage + 1 > props.firestorePaging.pageNumber) {
        const rows = await props.firestorePaging.next();
        await rowRender(rows);
      } else if (newPage + 1 < props.firestorePaging.pageNumber && props.firestorePaging.canBack) {
        const rows = await props.firestorePaging.back();
        await rowRender(rows);
      }
    },
    [props.firestorePaging, rowRender]
  );

  useEffect(() => {
    onFirstRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContentsWrapper width={'100%'} flexDirection={'column'} padding={'0px'}>
      <TableContainer component={props => <Paper {...props} />}>
        <Table width={'100%'}>
          <TableHead>
            <TableRow>
              {props.headers.map(header => (
                <TableCell key={header.key} align={header.align} width={header.width}>
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              // eslint-disable-next-line react/jsx-key
              <TableRow hover sx={{cursor: 'pointer'}}>
                {row.map(column => (
                  // eslint-disable-next-line react/jsx-key
                  <TableCell>{column}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component='div'
          count={props.firestorePaging.allDocumentNumber ?? rows.length}
          rowsPerPage={props.firestorePaging.pageLimit ?? 25}
          page={props.firestorePaging.pageNumber - 1}
          onPageChange={handleChangePage}
        />
      </TableContainer>
    </ContentsWrapper>
  );
});
WTable.displayName = 'WTable';

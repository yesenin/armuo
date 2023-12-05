import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const Cases = () => {
  return (
    <Container>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>Именительный падеж</Typography>
              <Typography variant="italic">Кто? Что?</Typography>
            </TableCell>
            <TableCell>
              <Typography>Կատու</Typography>
              <Typography variant="bold">ն</Typography>
            </TableCell>
            <TableCell>
              <Typography>Տուն</Typography>
              <Typography variant="bold">ը</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>Родительный падеж</Typography>
              <Typography variant="italic">Кто? Что?</Typography>
            </TableCell>
            <TableCell>
              <Typography>Կատու</Typography>
              <Typography variant="bold">ի</Typography>
            </TableCell>
            <TableCell>
              <Typography>Տուն</Typography>
              <Typography variant="bold">ի</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>Дательный падеж</Typography>
              <Typography variant="italic">Кто? Что?</Typography>
            </TableCell>
            <TableCell>
              <Typography>Կատու</Typography>
              <Typography variant="bold">ն</Typography>
            </TableCell>
            <TableCell>
              <Typography>Տուն</Typography>
              <Typography variant="bold">ը</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>Винительный падеж</Typography>
              <Typography variant="italic">Кто? Что?</Typography>
            </TableCell>
            <TableCell>
              <Typography>Կատու</Typography>
              <Typography variant="bold">ն</Typography>
            </TableCell>
            <TableCell>
              <Typography>Տուն</Typography>
              <Typography variant="bold">_</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>Исключительный падеж</Typography>
              <Typography variant="italic">Кто? Что?</Typography>
            </TableCell>
            <TableCell>
              <Typography>-</Typography>
            </TableCell>
            <TableCell>
              <Typography>Տուն</Typography>
              <Typography variant="bold">ից</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>Инструментальный падеж</Typography>
              <Typography variant="italic">Кто? Что?</Typography>
            </TableCell>
            <TableCell>
              <Typography>Կատու</Typography>
              <Typography variant="bold">ով</Typography>
            </TableCell>
            <TableCell>
              <Typography>Տուն</Typography>
              <Typography variant="bold">ով</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Typography>Местный падеж</Typography>
              <Typography variant="italic">Где?</Typography>
            </TableCell>
            <TableCell>
              <Typography>Կատու</Typography>
              <Typography variant="bold">ում</Typography>
            </TableCell>
            <TableCell>
              <Typography>Տուն</Typography>
              <Typography variant="bold">ում</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};

export default Cases;

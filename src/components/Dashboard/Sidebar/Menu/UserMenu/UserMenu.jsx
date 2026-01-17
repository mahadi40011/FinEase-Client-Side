import React from 'react';
import MenuItem from '../MenuItem';
import { IoHome } from 'react-icons/io5';
import { GrTransaction } from 'react-icons/gr';
import { BiSolidUserDetail } from 'react-icons/bi';
import { FcStatistics } from 'react-icons/fc';

const UserMenu = () => {
  return (
    <>
      <MenuItem label="Reports" address="reports" icon={FcStatistics} />
      <MenuItem
        label="Add Transaction"
        address="add-transaction"
        icon={GrTransaction}
      />
      <MenuItem
        label="My Transaction"
        address="my-transactions"
        icon={BiSolidUserDetail}
      />
    </>
  );
};

export default UserMenu;
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const CartBadge = ({ count, onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <Badge
        badgeContent={count}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "#3BB77E",
            color: "#ffffff",
          },
        }}
      >
        <FiShoppingCart
          className="hover:text-green-600"
          size={22}
          color="#253D4E"
        />
      </Badge>
    </IconButton>
  );
};

export default CartBadge;
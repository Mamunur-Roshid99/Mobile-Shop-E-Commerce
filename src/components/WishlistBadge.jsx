import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const WishlistBadge = ({ count = 0, onClick }) => {
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
        <FaRegHeart
          className="hover:text-green-600"
          size={22}
          color="#253D4E"
        />
      </Badge>
    </IconButton>
  );
};

export default WishlistBadge;
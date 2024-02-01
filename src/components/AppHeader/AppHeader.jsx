import agletsLogo from "/logo.png";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../App.css";
import "./header.css";
import Badge from "@mui/material/Badge";
import { useEffect } from "react";
export default function AppHeader({ carrinho, setOpenPage }) {
  return (
    <div className="header">
      <img src={agletsLogo} alt="Aglets logo" width="150px" height="48px" />
      <p>Aglets Soluções</p>
      <IconButton aria-label="carrinho" onClick={() => setOpenPage("carrinho")}>
        <Badge badgeContent={carrinho?.length} color="error">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
    </div>
  );
}

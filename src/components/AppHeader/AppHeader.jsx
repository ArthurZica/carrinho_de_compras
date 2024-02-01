import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import agletsLogo from "/logo.png";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CarrinhoContext } from "../../App";
import "../../App.css";
import "./header.css";

export default function AppHeader({ setOpenPage }) {
  const { carrinho } = useContext(CarrinhoContext);

  return (
    <div className="header">
      <img src={agletsLogo} alt="Aglets logo" width="150px" height="48px" />
      <p>Aglets Soluções</p>
      <IconButton aria-label="carrinho" onClick={() => setOpenPage("carrinho")}>
        <Badge badgeContent={carrinho?.length || 0} color="error">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
    </div>
  );
}

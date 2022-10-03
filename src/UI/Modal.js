import React, { useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import GameCotext from "../store/game-context";

function GameModal(args) {
  const [modal, setModal] = useState(true);
  const gameCtx = useContext(GameCotext);
  const toggle = () => {
    setModal(!modal);
    gameCtx.newGame(true);
    gameCtx.test();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Game information</ModalHeader>
        <ModalBody>GAME OVER</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Start New Game
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Load Previous Game
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default GameModal;

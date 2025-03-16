import ModalFrame from "../modalFrame";

type DepositModalProbs = {
  closeModal: () => void;
};

export default function DepositModal({ closeModal }: DepositModalProbs) {
  return (
    <ModalFrame closeModal={closeModal}>
      <h1>Deposit</h1>
    </ModalFrame>
  );
}

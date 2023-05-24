export default function DisableElements() {
  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.disabled = true;
  }

  const enabledButton = document.getElementById(
    "btn-reset"
  ) as HTMLButtonElement;
  enabledButton.disabled = false;
}

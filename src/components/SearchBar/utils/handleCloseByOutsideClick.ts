export const handleCloseByOutsideClick = (ref: any, setClose: (close: boolean) => void) => {
  function handleClickOutside(event: any) {
    if (ref.current && !ref.current.contains(event.target)) {
      setClose(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}
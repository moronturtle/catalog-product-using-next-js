export const convertToRupiah = (amount: number) => {
    const rupiah = amount * 15000;
    return rupiah.toLocaleString("id-ID");
  };

  export const CalculateToRupiah = (amount: number) => {
    const rupiah = amount * 15000;
    return rupiah;
  };
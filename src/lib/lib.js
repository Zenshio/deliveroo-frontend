const format = (num, decimals = 2) => {
  return (
    parseFloat(num).toLocaleString("fr-FR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) + " €"
  );
};

module.exports = { format };

export default function formatErrorMessages(error) {
  return Object.keys(error)
    .reduce((keyAcc, key) => {
      const errs = error[key].reduce((errAcc, item) => {
        errAcc.push(`${key} ${item}`);
        return errAcc;
      }, []);
      return [...keyAcc, ...errs];
    }, []);
}

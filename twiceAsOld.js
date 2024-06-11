const form = document.querySelector('form');
const output = document.querySelector('p');

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const {
    dadAge: { value: dadAge },
    kidAge: { value: kidAge },
  } = e.target.elements;
  if (!dadAge || !kidAge) return;

  const inYears = twiceAsOld(+dadAge, +kidAge);

  const date = new Date();
  const year = date.getFullYear();

  if (inYears === 0) {
    output.textContent = `Now, in ${year} the Parent is twice as old as the Kiddo.`;
    return;
  }

  let msg =
    +dadAge > 2 * +kidAge
      ? `In ${inYears} years the Parent will be twice as old as the Kiddo. <br/>Kiddo will be ${
          +kidAge + inYears
        }. Parent will be ${+dadAge + inYears}.`
      : `${inYears} years ago the Parent was twice as old as the kiddo.<br/>Kiddo was ${
          +kidAge - inYears
        }. Parent was ${+dadAge - inYears}.`;

  msg += `<br/>That's in ${year + inYears}.`;

  output.innerHTML = msg;
};

form.addEventListener('submit', handleSubmit);

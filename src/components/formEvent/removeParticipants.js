import refs from '../../utils/refs.js';

function removeParticipants(event) {
  event.preventDefault();
  const { inputParticipants } = refs;
  const lastIndex = inputParticipants.value.lastIndexOf(' ');
  const string = inputParticipants.value.slice(0, lastIndex);
  inputParticipants.value = string;
}

export default removeParticipants;

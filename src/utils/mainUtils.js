import moment from "moment";

export const calculateTimeDiff = (createdAt) => {
  const current = moment();
  const previous = moment(createdAt);
  const duration = moment.duration(current.diff(previous));

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();

  let result = "";
  if (days > 0) {
    result += `${days}d`;
  }
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += `${minutes}h`;
  }

  console.log(result.trim())
  return result.trim();
};

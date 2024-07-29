import { MESSAGES } from "consts";
import { Logger } from "utils";

const databaseSetup = async (next: () => void) => {
  try {
    Logger.log(MESSAGES.DATABASE_CONNECTION_SUCCESS);
    next();
  } catch (error) {
    Logger.log(error);
    Logger.error(MESSAGES.DATABASE_CONNECTION_FAILURE);
  }
};

export default databaseSetup;
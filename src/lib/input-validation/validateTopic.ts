/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { isEmpty, matches } from "validator";
import { Enum, ExtendEnum } from "../../types/types";
import { ErrorTypes } from "./constant/errorTypes";
import { validateLength, ValidateLengthErrorType } from "./validateLength";

export const ValidateTopicErrorType = ExtendEnum(ValidateLengthErrorType, ErrorTypes.invalidFormat);
export type ValidateTopicErrorType = Enum<typeof ValidateTopicErrorType>;

export const validateTopic = (value: string) => {
  const REGEX = "^[A-Z]+([_]{1}[A-Z]+)*$";
  if (isEmpty(value)) {
    return ValidateTopicErrorType.empty;
  }
  if (!matches(value, REGEX)) {
    return ValidateTopicErrorType.invalidFormat;
  }
  return validateLength(value);
};

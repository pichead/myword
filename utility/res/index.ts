const resOk = (
  statusCode: number,
  messageEn: string,
  messageTh: string,
  data: { [key: string]: any }[] | { [key: string]: any } | null,
  ...extraParams: Record<string, any>[]
) => {
  return {
    statusCode: statusCode,
    messageEn: messageEn,
    messageTh: messageTh,
    data: data,
    ...extraParams,
  };
};

const resError = (statusCode: number, messageEn: string, messageTh: string) => {
  return {
    statusCode: statusCode,
    messageEn: messageEn,
    messageTh: messageTh,
  };
};

const resAny = (
  statusCode: number,
  messageEn: string,
  messageTh: string,
  ...extraParams: Record<string, any>[]
) => {
  return {
    statusCode: statusCode,
    messageEn: messageEn,
    messageTh: messageTh,
    ...extraParams,
  };
};



export { resOk, resError, resAny };

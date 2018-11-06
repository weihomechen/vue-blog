import { Message } from 'element-ui';

const DEFAULT_SUCCESS_MSG = '操作成功';
const DEFAULT_ERROR_MSG = '服务器开小差了，请稍后再试';

export const errorHandler = (compInstance, e) => {
  const { msg } = e;
  compInstance.$message({
    type: 'error',
    message: msg || DEFAULT_ERROR_MSG,
  });
};

export const responseHandler = (compInstance, res, cb, duration = 1500) => {
  const { success, msg } = res;
  const type = success ? 'success' : 'error';
  const message = msg || (success ? DEFAULT_SUCCESS_MSG : DEFAULT_ERROR_MSG);
  const onClose = typeof cb === 'function' ? cb : () => { };

  compInstance.$message({ type, message, duration, onClose });
};

export function checkFileSize(file, size) {
  const isLt2M = file.size / 1024 / 1024 < size;
  if (!isLt2M) {
    Message.error(`请选择小于${size}M的图片`);
  }

  return isLt2M;
}

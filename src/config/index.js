/* 环境配置文件
开发环境 测试环境 线上环境 */

// 当前的环境
const env = import.meta.env.MODE || 'prod';

const EnvConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/',
  },
  test: {
    baseApi: '',
    mockApi: 'https://www.fastmock.site/mock/',
  },
  pro: {
    baseApi: '',
    mockApi: 'https://www.fastmock.site/mock/',
  },
};

export default {
  env,
  // mock的总开关
  mock: true,
  ...EnvConfig[env],
};
import axios from 'axios';

export async function httpCommunicator(
  url: string,
  method: string,
  params?: any,
  header?: any
) {
  try {
    let res;
    switch (method) {
      case 'post':
        res = await axios.post(url, params, header);
        break;
      case 'get':
        res = await axios.get(url, params);
        break;
      default:
        return null;
    }
    return res;
  } catch (err: any) {
    alert(err.response.data.message);
    return err.response;
    //현재 서버에서 받은 err메시지를 출력중임,
    //만약 내가 설정한 err로 출력하고 싶다면 alert를 지우고 return err; 로 변경하면 적용됨
  }
}

// action


//액션 타입
export const TOGGLE_NEW_POST = 'TOGGLE_NEW_POST';


//액션 생성자
export function toggle_new_post(value) {
    return {
        type: TOGGLE_NEW_POST,
        status: value 
    }
}

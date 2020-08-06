export const state = () => ({
    studentList: [
        {
            exam_no    : '11001',
            student_knm: '유아',
            birth_dt   : '20000315',
            unit_nm    : '실용음악학과',
            room_no    : '101',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : true,
        },
        {
            exam_no    : '11002',
            student_knm: '승희',
            birth_dt   : '20000601',
            unit_nm    : '실용음악학과',
            room_no    : '101',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        },
        {
            exam_no    : '11003',
            student_knm: '아린',
            birth_dt   : '20000924',
            unit_nm    : '실용음악학과',
            room_no    : '101',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        },
        {
            exam_no    : '11004',
            student_knm: '진',
            birth_dt   : '20000125',
            unit_nm    : '실용음악학과',
            room_no    : '102',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        },
        {
            exam_no    : '11005',
            student_knm: '제이홉',
            birth_dt   : '20001115',
            unit_nm    : '실용음악학과',
            room_no    : '102',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : true,
        },
        {
            exam_no    : '11006',
            student_knm: '지민',
            birth_dt   : '20001225',
            unit_nm    : '실용음악학과',
            room_no    : '102',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        },
        {
            exam_no    : '11007',
            student_knm: '제니',
            birth_dt   : '20000922',
            unit_nm    : '실용음악학과',
            room_no    : '103',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        },
        {
            exam_no    : '11008',
            student_knm: '지수',
            birth_dt   : '20000328',
            unit_nm    : '실용음악학과',
            room_no    : '103',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        },
        {
            exam_no    : '11009',
            student_knm: '로제',
            birth_dt   : '20000205',
            unit_nm    : '실용음악학과',
            room_no    : '103',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        },
        //타고사장 입실 학생
        {
            exam_no    : '11010',
            student_knm: '리사',
            birth_dt   : '20000419',
            unit_nm    : '실용음악학과',
            room_no    : '103',
            room_ch_no : '101',
            photo      : '',
            attd_date  : '2020-12-19',
            attd_yn    : false,
        }
    ],
    eval_member: [
        {
            eval_id : 'ev1',
            eval_nm : '유재석',
            eval_pw : 'mnc@pro1',
            position: '',
            comment : '본 위원'
        },
        //마스터 권한
        {
            eval_id : 'ev2',
            eval_nm : '이효리',
            eval_pw : '1',
            position: 'master',
            comment : '본 위원'
        },
        {
            eval_id : 'ev3',
            eval_nm : '비',
            eval_pw : '1',
            position: '',
            comment : '본 위원'
        },
        {
            eval_id : 'ev4',
            eval_nm : '광희',
            eval_pw : '1',
            position: '',
            comment : '예비 위원'
        }
    ],
    room: [
        {
            room_no : '101',
            room_nm : '101시험장',
            eval_id : ['ev1','ev4'],
            attd_cnt: 1,
            full_cnt: 3
        },
        {
            room_no : '102',
            room_nm : '102시험장',
            eval_id : ['ev2'],
            attd_cnt: 0,
            full_cnt: 3
        },
        {
            room_no : '103',
            room_nm : '103시험장',
            eval_id : ['ev3'],
            attd_cnt: 0,
            full_cnt: 4
        },
    ],
    authInfo : {
        roomInfo : {},
        userInfo : {}
    },
})

export const getters = {
    userInfo : (state) => (key) =>{
        return key === '' ? state.authInfo.userInfo : state.authInfo.userInfo[key];
    },
    roomInfo: (state) => (key) =>{
        return key === '' ? state.authInfo.roomInfo : state.authInfo.roomInfo[key];
    },
    profileInfo : (state) => {
        let resultArray = [];
        resultArray.push({
                "name":"이름",
                "value":state.authInfo.userInfo.eval_nm
            });
        resultArray.push({
                "name":"출석/정원",
                "value":`${state.authInfo.roomInfo.attd_cnt}/${state.authInfo.roomInfo.full_cnt}`
            });
        console.log(resultArray)
        return resultArray
    }
    
}

export const mutations = {

    LOGIN: function(state,user){
        state.authInfo.userInfo = user;
        state.authInfo.roomInfo = state.room.filter(function (roomInfo) { 
            return !roomInfo.eval_id.indexOf(user.eval_id) 
        })[0];
    },
    ROOM_STATE_CHANGE : (state) => (getters) =>{
        let room_no = getters.roomInfo('room_no');
        let attd_student = state.studentList.filter(function (student){
            return student.attd_yn && (student.room_no === room_no || student.room_ch_no === room_no) 
        });
        let roomInfo = getters.roomInfo('');
        roomInfo.attd_cnt = attd_student.length;
    }
}

export const actions = {
    async login({ state,commit }, { id, pw }) {
        let  resultUser   = await state.eval_member.filter(function (member) { return member.eval_id == id && member.eval_pw == pw });
        if (resultUser.length < 1) {
          throw new Error('로그인에 실패했습니다.')
        }
        commit('LOGIN', resultUser[0])
    },
    async roomStateChange({ state,commit }){
        commit('ROOM_STATE_CHANGE')
    }
    
}
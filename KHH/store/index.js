export const state = () => ({
    student: [
        {
            exam_no    : '11001',
            student_knm: '유아',
            birth_dt   : '20000315',
            unit_nm    : '실용음악학과',
            room_no    : '101',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11002',
            student_knm: '승희',
            birth_dt   : '20000601',
            unit_nm    : '실용음악학과',
            room_no    : '101',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11003',
            student_knm: '아린',
            birth_dt   : '20000924',
            unit_nm    : '실용음악학과',
            room_no    : '101',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11004',
            student_knm: '진',
            birth_dt   : '20000125',
            unit_nm    : '실용음악학과',
            room_no    : '102',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11005',
            student_knm: '제이홉',
            birth_dt   : '20001115',
            unit_nm    : '실용음악학과',
            room_no    : '102',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11006',
            student_knm: '지민',
            birth_dt   : '20001225',
            unit_nm    : '실용음악학과',
            room_no    : '102',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11007',
            student_knm: '제니',
            birth_dt   : '20000922',
            unit_nm    : '실용음악학과',
            room_no    : '103',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11008',
            student_knm: '지수',
            birth_dt   : '20000328',
            unit_nm    : '실용음악학과',
            room_no    : '103',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
        },
        {
            exam_no    : '11009',
            student_knm: '로제',
            birth_dt   : '20000205',
            unit_nm    : '실용음악학과',
            room_no    : '103',
            room_ch_no : '',
            photo      : '',
            attd_date  : '2020-12-19'
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
            attd_date  : '2020-12-19'
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
            eval_pw : 'mnc@pro1',
            position: 'master',
            comment : '본 위원'
        },
        {
            eval_id : 'ev3',
            eval_nm : '비',
            eval_pw : 'mnc@pro1',
            position: '',
            comment : '본 위원'
        },
        {
            eval_id : 'ev4',
            eval_nm : '광희',
            eval_pw : 'mnc@pro1',
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
    rv: [
        {
            chk : ''
        }
    ]
})

export const mutations = {
    login(state, data) {
        var index = state.eval_member.findIndex(i => i.eval_id == data.login)
        if(index < 0) {
            state.rv[0].chk = 'idfail';
            return;
        }
        if(state.eval_member[index].eval_pw == data.password) {
            state.rv[0].chk = 'success';
        } else {
            state.rv[0].chk = 'pwfail';
        }
    }
}
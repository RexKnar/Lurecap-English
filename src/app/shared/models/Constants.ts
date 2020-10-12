export const ROUTE_CONFIG = {
    baseUrl: 'https://speakrefine.com/api'
};

export const COURSE_CARD_API_CONFIG = {
    GetAllCourseList: '/v1/Course/GetAllCourseList?userType=learner',
    GetCourseDetails: '/v1/Course/GetCourseDetailsBYCourseId?courseId=',
    GetReviewDetailsUrl:'/v1/Course/GetReviewDetailsByCourseId?CourseId='
};

export const CONTACT_US_API_CONFIG = {
    SendQueries: '/Token/ContactusSave',
};
export const CORE_API_CONFIG = {
    SiginURL: '/Token',
    SignupURL: '/Token/RegisterUser',
};

export const PAYMENT_API_CONFIG={
    PayuOrderUrl:'/Payment/PayuOrder?CourseMasterId=',
    VerifyPaymentUrl:'/Payment/VerifyPaymentPayuMoney?PaymentId=',
}

import React, { Component } from 'react';

import './Home.css';

const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName('head')[0].appendChild(meta);

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('data')) || {
            companyName:"", 
            radioGroup: {
                businessType1: true,
                businessType2: false,
            },
            businessType3: false,
            status: "",
            type: "",
            subscribers: 0,
            unsubscribers: 0,
            compliance1: false,
            compliance2: false,
            join_route:0,
            uncollected:0,
            additionalEmployment1:0,
            additionalEmployment2:0,
            proA:0,
            proB:0,
            proC:0,
            note:"",
            totalMonthPay:0,
            monthExpense :0,
            totalExpense :0,
            maxCusProfit : 0,
            check: false,
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        const meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
        document.getElementsByTagName('head')[0].appendChild(meta);
    };

    handleChange = (e) => { 
        console.log(this.state);
        console.log("target : "+e.target.value+" / "+ this.state[e.target.id]);
        if(e.target.value==="on" && this.state[e.target.id]===false){
            this.setState({ 
                [e.target.id]: true,
            }); 
        }
        else if(e.target.value==="on" && this.state[e.target.id]===true){
            this.setState({ 
                [e.target.id]: false,
            }); 
        }
        else { 
            this.setState({ 
                [e.target.id]: e.target.value,
            }); 
        }
    };

    handleOnClick = async(e) => {
        console.log(this.state)
        await localStorage.setItem('data', JSON.stringify(this.state));
        this.props.history.push('/quote');
    }

    handleRadio = (event) => {
        let obj = {
                businessType1: false,
                businessType2: false,
        }
        console.log(event.target.value + '/'+event.target.checked );
        obj[event.target.id] = event.target.checked // true
        console.log(obj);
        this.setState({
            radioGroup: obj
        })
    }

    initOnClick = async(e) => {
        console.log("clicked!")
        this.setState({
            radioGroup: {
                businessType1: false,
                businessType2: false,
              },
            businessType3: false,
            status: "",
            type: "",
            companyName:"", 
            subscribers: 0,
            unsubscribers: 0,
            compliance1: false,
            compliance2: false,
            join_route:0,
            uncollected:0,
            additionalEmployment1:0,
            additionalEmployment2:0,
            proA:"",
            proB:"",
            proC:"",
            note:"",
            totalMonthPay:0,
            monthExpense :0,
            totalExpense :0,
            maxCusProfit : 0,
            check: false,
        },() => {localStorage.setItem('data', JSON.stringify(this.state));});
    }

    

    handleDateChange(date) {
        this.setState({
           startDate: date
        })   
    }
    
    render() {        
        return (
            <div>
            <div className='Container'>
            <h3>성공의 파트너&#44; 투진컴퍼니</h3>

            <form className="AddSalesForm">
                <h3>사전 인터뷰</h3>
                <div className='name'>
                    <label>
                        <p className='subject'>기업명</p> 
                        <input className='textInput' type="text" id='companyName' placeholder='회사 이름을 입력해주세요' value={this.state.companyName} onChange={this.handleChange}/>
                    </label>
                </div>
                <div className='business'>
                    <label>
                        <p className='subject'>사업자 종류</p>
                    </label>
                    <label className='labelCheck'>
                        <input className='btnRadio' type="radio" name="radioGroup" id='businessType1'
                        checked={this.state.radioGroup['businessType1']} onChange={this.handleRadio}/>
                        <span>개인사업자</span>
                    </label>
                    <label className='labelCheck'>
                        <input className='btnRadio' type="radio" name="radioGroup" id='businessType2' checked={this.state.radioGroup['businessType2']} onChange={this.handleRadio}/>
                        <span>법인사업자</span>
                    </label>
                    <div className='businessType'>
                        <label>
                            <p>업태</p> 
                            <input className='textInput' type="text" placeholder='업태를 입력해주세요' id='status' value={this.state.status} onChange={this.handleChange}/>
                        </label>
                        <label>
                            <p>업종</p>
                            <input className='textInput' type="text" placeholder='업종을 입력해주세요' id='type' checked={this.state.type} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <label className='labelCheck'>
                        <input className='checkBox' type="checkbox" id='businessType3' checked={this.state.businessType3} onChange={this.handleChange}/>
                        <p className='subject'>성장유망업종</p>
                    </label>
                    <label className='explain'>
                        <p>성장유망업종이란&#63;</p>
                        <label>
                            <h6>사업 지침에 따른 특별 지원대상 업종</h6>
                            <p>
                            ① 벤처기업<br/>
                            ② 지식서비스산업<br/>
                            ③ 문화콘텐츠산업<br/>
                            ④ 신･재생에너지산업분야 관련 업종<br/>
                            ⑤ 성장유망업종(전․후방산업)<br/>
                            ⑥ 청년 창업기업<br/>
                            ⑦ 혁신형 중소기업(이노비즈, 메인비즈),  IT직무를 수행할 수 있는 기업<br/>
                            <br/>
                            <span>
                                문의을 통해 해당 사항에 대한 안내 및 자세한 상담을 할 수 있습니다.
                            </span> 
                            </p>
                        </label>
                    </label>
                </div>
                <div className='member'>
                    <label className='subject'>
                        <p>기존 직원 정보</p>    
                    </label>
                    <div>
                        <label>
                            <p>4대보험 가입인원</p>
                            <input className='numberInput' type="number" placeholder='4대보험에 가입중인 직원 수' id='subscribers' min='0' value={this.state.subscribers} onChange={this.handleChange}/>
                        </label> 
                        <label className='labelCheck'>
                            <p>최저임금준수</p>
                            <input className='checkBox' type="checkbox" id='compliance1' checked={this.state.compliance1} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>4대보험 미가입인원</p>
                            <input className='numberInput' type="number" placeholder='4대보험에 가입중이지 않은 직원 수' id='unsubscribers' min='0' value={this.state.unsubscribers} onChange={this.handleChange}/>
                        </label>
                        <label className='labelCheck'>
                            <p>최저임금준수</p>
                            <input className='checkBox' type="checkbox" id='compliance2' checked={this.state.compliance2} onChange={this.handleChange}/>
                        </label>
                    </div>
                </div>
                <label className='subject recruit'>
                    <p>추가 고용 계획을 입력해주세요</p>
                    <label>
                        <p>채용 예정 인원</p>
                        <input className='numberInput' type="number" placeholder='추후 채용 계획에 있는 인원 수' id='additionalEmployment1' min='0' value={this.state.additionalEmployment1} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <p>신규채용자 월 급여 (단위:만 원)</p>
                        <input className='numberInput' type="number" placeholder='채용 예정 직원의 1인당 월 급여' id='additionalEmployment2' min='0' value={this.state.additionalEmployment2} onChange={this.handleChange}/>
                    </label>
                </label>
                <label className='agreement'>위 기업정보를 투진컴퍼니에서 활용하는데에 동의합니다&#46;</label>
                <div className='program'>
                    <label className='subject'>
                        <p>지원 프로그램</p>
                    </label>

                    <label className='prName'>{/*<input type="checkbox" id='proA' checked={this.state.proA} onChange={this.handleChange}/>*/}
                        <p>청년 디지털 지원 사업<br />&#40;1~6개월&#41;</p>
                    </label>
                    <label className='prContent'> 1인 당 최대 월190만 원
                    <p className='prContentSub'>&#40;급여 200만원 이하 &#58; 90&#37; &#43; 10만원 지원&#41;</p>
                    </label>
                    <label className='prName'>{/*<input type="checkbox" id='proB' checked={this.state.proB} onChange={this.handleChange}/>*/}
                        <p>청년 특별 채용 장려금<br />&#40;최대12개월&#41;</p>
                    </label>
                    <label className='prContent'> 1인 당 월75만 원</label>
                    <label className='prName'>{/*<input type="checkbox" id='proC' checked={this.state.proC} onChange={this.handleChange}/>*/}
                        <p>일자리 안정자금 사업<br/>&#40;최대30개월&#41;</p>
                    </label>
                    <label className='prContent'> 1인 당 월8만 원</label>
                </div>
                <button className='btnEstimate' type="button" onClick={this.handleOnClick}> 견적하기 </button>
                <button className='btnReset' type="button" onClick={this.initOnClick}> 초기화 </button>

                <label className='footerMent'>중소기업의 경영파트너&#44; 투진컴퍼니</label>

            </form>
        </div>
        </div>
        );
    }
}

export default Home;
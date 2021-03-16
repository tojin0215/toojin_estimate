import React, { Component } from 'react';

import './Home.css';

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
        };
        this.handleDateChange = this.handleDateChange.bind(this);
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
        },() => {localStorage.setItem('data', JSON.stringify(this.state));});
    }

    onClickForLink = () => {
        window.open('https://www.naver.com', '_blank') // url 이동
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
            <h3>성공의 파트너, 투진컴퍼니</h3>

            <form className="AddSalesForm">
                <h3>사전 인터뷰</h3>
                <div className='name'>
                    <label>
                        <p className='subject'>기업명</p> 
                        <input className='textInput' type="text" id='companyName' value={this.state.companyName} onChange={this.handleChange}/>
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
                            <input className='textInput' type="text" id='status' value={this.state.status} onChange={this.handleChange}/>
                        </label>
                        <label>
                            <p>업종</p>
                            <input className='textInput' type="text" id='type' checked={this.state.type} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <label className='labelCheck'>
                        <input className='checkBox' type="checkbox" id='businessType3' checked={this.state.businessType3} onChange={this.handleChange}/>
                        <p className='subject'>성장유망업종 여부</p>
                    </label>
                    <label>
                        <p>성장유망업종이란?</p>
                    </label>
                    <label>설명</label>
                </div>
                <label className='subject'>
                    <p>기존 직원 정보를 입력해주세요</p>    
                </label>
                <label>
                    <p>4대보험 가입인원</p>
                    <input className='numberInput' type="number" id='subscribers' value={this.state.subscribers} onChange={this.handleChange}/>
                </label> 
                <label className='labelCheck'>
                    <p>최저임금준수여부</p>
                    <input className='checkBox' type="checkbox" id='compliance1' checked={this.state.compliance1} onChange={this.handleChange}/>
                </label>
                <label>
                    <p>4대보험 미가입인원</p>
                    <input className='numberInput' type="number" id='unsubscribers' value={this.state.unsubscribers} onChange={this.handleChange}/>
                </label>
                <label className='labelCheck'>
                    <p>최저임금을 준수하고 있습니다</p>
                    <input className='checkBox' type="checkbox" id='compliance2' checked={this.state.compliance2} onChange={this.handleChange}/>
                </label>
                <label className='subject'>
                    <p>추가 고용 계획을 입력해주세요</p>
                    <input className='numberInput' type="number" id='additionalEmployment1' value={this.state.additionalEmployment1} onChange={this.handleChange}/>
                    <input className='numberInput' type="number" id='additionalEmployment2' value={this.state.additionalEmployment2} onChange={this.handleChange}/>
                </label>
                <label>위 기업정보를 투진컴퍼니에서 활용하는데에 동의합니다.</label>
                <label>{/*<input type="checkbox" id='proA' checked={this.state.proA} onChange={this.handleChange}/>*/}프로그램A(1~6개월)</label>
                <label> : 1인 당 최대 190만 원 </label>
                <label>{/*<input type="checkbox" id='proB' checked={this.state.proB} onChange={this.handleChange}/>*/}프로그램B(최대30개월)</label>
                <label> : 1인 당 75만 원</label>
                <label>{/*<input type="checkbox" id='proC' checked={this.state.proC} onChange={this.handleChange}/>*/}프로그램C(최대30개월)</label>
                <label> : 1인 당 8만 원</label>
                <button type="button" onClick={this.onClickForLink}> 상담하기 </button>
                <button type="button" onClick={this.handleOnClick}> 견적하기 </button>
                <button type="button" onClick={this.initOnClick}> 초기화 </button>
                <label>중소기업의 경영파트너, 투진컴퍼니</label>
            </form>
        </div>
        </div>
        );
    }
}

export default Home;

import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Quote.css';

const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName('head')[0].appendChild(meta);

class Quote extends Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('data'));

        const meta = document.createElement('meta');
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
        document.getElementsByTagName('head')[0].appendChild(meta);
    };
    componentDidMount(){
        if(this.state.additionalEmployment1 > 0 && this.state.additionalEmployment2 > 0){
            //pro A 최대 지원금
            if(this.state.additionalEmployment2 < 1900000){
                this.setState({proA: (this.state.additionalEmployment2*0.9+100000)*6 * this.state.additionalEmployment1})
            }else{
                this.setState({proA: 1900000*6 * this.state.additionalEmployment1})
            }
            //pro B 최대 지원금
            this.setState({proB: this.state.additionalEmployment1*750000*30})
            //pro C 최대 지원금
            this.setState({proC: this.state.additionalEmployment1*80000*30})

            /*this.setState({ 
                totalMonthPay:this.state.additionalEmployment1*this.state.additionalEmployment2,
                monthExpense :this.state.additionalEmployment1*150000 + 150000,
                totalExpense :(this.state.additionalEmployment1*150000+150000)*6,
                maxCusProfit : this.state.maxSupport - this.state.totalExpense,
            })*/
            
            /*}else if(this.state.proA && this.state.proB && !this.state.proC){ //AB
                if(this.state.additionalEmployment2 < 2000000){
                    this.setState({maxSupport: (this.state.additionalEmployment2*0.9 +100000) *6 * this.state.additionalEmployment1 + (this.state.additionalEmployment1*22500000)})
                }else{
                    this.setState({maxSupport: this.state.additionalEmployment1*1900000 *6 + (this.state.additionalEmployment1*22500000)})
                }
            }else if(this.state.proA && !this.state.proB && this.state.proC){ //AC
                if(this.state.additionalEmployment2 < 2000000){
                    this.setState({maxSupport: this.state.additionalEmployment2*0.9 +100000 *6 * this.state.additionalEmployment1 + (this.state.additionalEmployment1*5*36)})
                }else{
                    this.setState({maxSupport:  this.state.additionalEmployment1*1900000 *6 + ( this.state.additionalEmployment1*50000*36)})
                }
            }else if(!this.state.proA && this.state.proB && this.state.proC){ //BC
                this.setState({maxSupport: (this.state.additionalEmployment1*27000000) + (this.state.additionalEmployment1*50000*36)})
            }else if(this.state.proA && this.state.proB && this.state.proC){ //ABC
                if(this.state.additionalEmployment2 < 2000000){
                    this.setState({maxSupport: (this.state.additionalEmployment2*0.9 +100000) *6 * this.state.additionalEmployment1 + (this.state.additionalEmployment1*22500000) + (this.state.additionalEmployment1*50000*36)})
                }else{
                    this.setState({maxSupport: this.state.additionalEmployment1*1900000 *6 + (this.state.additionalEmployment1*22500000) + (this.state.additionalEmployment1*50000 * 36)})
                }
            }*/
            
            this.setState({ 
                totalMonthPay:this.state.additionalEmployment1*this.state.additionalEmployment2,
                monthExpense :this.state.additionalEmployment1*150000 + 150000,
                totalExpense :(this.state.additionalEmployment1*150000+150000)*36,
            })
            

        }
    }
    handleOnClick = (e) => {
        this.props.history.push('/');
    }

    render() {        
        return (
        <div className='container'>
        <h2>견적 결과</h2>
        <form>
            <div className='company'>
            <div className='companyBasic'>
                <label>
                    <span>기업명</span>
                    <p>{this.state.companyName}</p>
                </label>
                {/*<label>고객 사업자/법인등록번호 : </label><br /><br/>*/}
                <label>{this.state.radioGroup.businessType1==true?"개인사업자":this.state.radioGroup.businessType2===true?"법인사업자":""}</label>
            </div>
            <div className='companyType'>
                <label>
                    <span>업태</span>
                    <p>{this.state.status}</p>
                </label>
                <label>
                    <span>업종</span>
                    <p>{this.state.type}</p>
                </label>
                <label>성장유망업종 : {this.state.businessType3?"O":"X"}</label>
            </div>
            <div className='member'>
                <label>직원 정보</label>
                <label>
                    <span>4대보험 가입 직원 수</span>
                    <p>{this.state.subscribers} 명</p>
                </label>
                <label>
                    <span>4대보험 미가입 직원 수</span>
                    <p>{this.state.unsubscribers}명</p>
                </label>
            </div>
            <label className='plan'>
                <span>채용 계획</span>
                <p>{this.state.additionalEmployment1}명</p>
            </label>
            </div>
            <label>간이 견적표</label>

            <label>총 월급여액 : {this.state.totalMonthPay}원</label>
            <label>월 비용 : {this.state.monthExpense}원</label>
            
            <label>proA</label>
            <label>총 비용 : {this.state.monthExpense *6}원</label>
            <label>최대지원금액 : {this.state.proA}원</label>
            <label>최대고객이익 : {this.state.proA - this.state.totalExpense}원</label>

            <label>proB</label>
            <label>총 비용 : {this.state.monthExpense *36}원</label>
            <label>최대지원금액 : {this.state.proB}원</label>
            <label>최대고객이익 : {this.state.proB - this.state.totalExpense}원</label>

            <label>proC</label>
            <label>총 비용 : {this.state.monthExpense *36}원</label>
            <label>최대지원금액 : {this.state.proC}원</label>
            <label>최대고객이익 : {this.state.proC - this.state.totalExpense}원</label>

            <label>위 견적은 간이 견적으로 실제 견적과 차이가 있을 수 있습니다.</label>

            <label>기업정보를 투진컴퍼니에 제공하는 것에 동의합니다.</label>
            <label>중소기업의 든든한 파트너, 투진컴퍼니</label>
            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleOnClick}> 돌아가기 </button>
        </form>
        </div>
        );
    }
}

export default Quote;

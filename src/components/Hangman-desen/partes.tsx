import styled from 'styled-components'
import styles4 from './Hangman.module.css'

function Partes(){
const Base = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 294px;
    height: 5px;
    top: 443px;
    left: 573px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    left:45px;
    top:-1px;
}
@media screen and (min-width: 1270px) {
    width: 294px;
    height: 5px;
    top: 443px;
    left: 573px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
}
`;

const Haste = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 360px;
    top: 88px;
    left: 200px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:31.5%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 360px;
    top: 88px;
    left: 200px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:43.5%;
}
`;

const Barra = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 177.75px;
    height: 4.5px;
    top: 88px;
    left: 653.67px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:31.5%;
}
@media screen and (min-width: 1270px) {
    width: 177.75px;
    height: 4.5px;
    top: 88px;
    left: 653.67px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:43.5%;
}
`;

const Corda = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 49.5px;
    top: 88px;
    left: 826.92px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:77.75%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 49.5px;
    top: 88px;
    left: 826.92px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    background: #0A3871;
    position:absolute;
    top:-359.5px;
    left:56.5%;
}
`
const Head =  styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 63px;
    height: 63px;
    top: 133px;
    left: 797.67px;
    gap: 0px;
    opacity: 0px;
    border-radius:50%;
    border:5px solid #0A3871;
    position:absolute;
    top:-310.8px;
    left:68.9%;
}
@media screen and (min-width: 1270px) {
    width: 63px;
    height: 63px;
    top: 133px;
    left: 797.67px;
    gap: 0px;
    opacity: 0px;
    border-radius:50%;
    border:5px solid #0A3871;
    position:absolute;
    top:-310.40px;
    left:54.15%;
}
`

const Body = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 135px;
    top: 196px;
    left: 826.92px;
    gap: 0px;
    opacity: 0px;
    position:absolute;
    background: #0A3871;
    top:-240.40px;
    left:77.8%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 135px;
    top: 196px;
    left: 826.92px;
    gap: 0px;
    opacity: 0px;
    position:absolute;
    background: #0A3871;
    top:-240.40px;
    left:56.55%;
}
`

const Bracodireito = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:72.85%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:55.2%;
}
`
const Bracoesquerdo = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:83%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 194.88px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-238px;
    left:57.9%;
}
`

const Pernadireita = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:73%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: 30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:55.25%;
}
`
const Pernaesquerda = styled.div`
@media screen and (min-width: 200px) and (max-width:768px){
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:82.7%;
}
@media screen and (min-width: 1270px) {
    width: 4.5px;
    height: 72px;
    top: 327.62px;
    left: 827.75px;
    gap: 0px;
    border-radius: 8px;
    opacity: 0px;
    rotate: -30deg;
    position:absolute;
    background: #0A3871;
    top:-112px;
    left:57.8%;
}
`
}

export default Partes
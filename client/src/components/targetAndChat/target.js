import './target.css'
import { ImCross } from 'react-icons/im';
export default function Target(){
    return(
        <div className="targetBox">
            <table>
            <tr className="target">Target:<input type="number" name="Time" /></tr>
            <tr className="ao5">Ao5:</tr>
            <tr className="ao12">Ao12:</tr>
            <tr className="mean">Mean:</tr>
            <tr className="space"></tr>
            <tr className="lastRow">
                <th className="plusTwo">+2</th>
                <th className="dnf">DNF</th>
                <th className="cross"><ImCross/></th>
            </tr>
            </table>
        </div>
        
    )
}
import Dropdown from "../components/dropdown"
import { useState } from "react"

function DropdownPage() {
    const [color, setColor] = useState({label: 'Select', value: 'white'})
    const [color2, setColor2] = useState({label: 'Select', value: 'white'})
    const [color3, setColor3] = useState({label: 'Select', value: 'white'})
    const handleColor = (arg) => {
        setColor(arg)
    }
    const handleColor2 = (arg) => {
        setColor2(arg)
    }
    const handleColor3 = (arg) => {
        setColor3(arg)
    }
    const options = [
        {
            label: 'Amarelo',
            value:'yellow'
        },
        {
            label: 'Vermelho',
            value:'red'
        },
        {
            label: 'Branco',
            value:'white'
        },
        {
            label: 'Preto',
            value:'black'
        },
        {
            label: 'Verde',
            value:'green'
        },
        {
            label: 'Azul',
            value:'blue'
        }
    ]
    return(
        <div className="flex">
            <div>
                <div style={{ backgroundColor: color.value }}><Dropdown options={options} value={color} onChange={handleColor}/></div>
            </div>
            <div>
                <div style={{ backgroundColor: color2.value }}><Dropdown options={options} value={color2} onChange={handleColor2}/></div>
            </div>
            <div>
                <div style={{ backgroundColor: color3.value }}><Dropdown options={options} value={color3} onChange={handleColor3}/></div>
            </div>
        </div>
    )
}

export default DropdownPage
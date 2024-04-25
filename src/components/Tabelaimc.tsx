interface TabelaimcProps{
    imc:number
}

export default function Tabelaimc(props:TabelaimcProps){
    return(
        <div className="mx-2 mb-2">
            <div className="flex">
                <div className="w-1/2 border text-center font-bold items-center">Classificação</div>
                <div className="w-1/2 border text-center font-bold items-center">IMC</div>
            </div>
            <div className={"flex " + (props.imc < 18.5?"destaque":"")}>
                <div className="w-1/2 border text-center">Abaixo do peso</div>
                <div className="w-1/2 border text-center">Abaixo de 18,5</div>
            </div>
            <div className={"flex " + (props.imc >=18.5 && props.imc <= 24.9?"destaque":"")}>
                <div className="w-1/2 border text-center">Peso normal</div>
                <div className="w-1/2 border text-center">Entre 18,5 e 24,9</div>
            </div>
            <div className={"flex " + (props.imc >=25 && props.imc <= 29.9?"destaque":"")}>
                <div className="w-1/2 border text-center">Sobrepeso</div>
                <div className="w-1/2 border text-center">Entre 25 e 29,9</div>
            </div>
            <div className={"flex " + (props.imc >=30 && props.imc <= 34.9?"destaque":"")}>
                <div className="w-1/2 border text-center">Obesidade grau I</div>
                <div className="w-1/2 border text-center">Entre 30 e 34,9</div>
            </div>
            <div className={"flex " + (props.imc >=35 && props.imc <= 39.9?"destaque":"")}>
                <div className="w-1/2 border text-center">Obesidade grau II</div>
                <div className="w-1/2 border text-center">Entre 35 e 39,9</div>
            </div>
            <div className={"flex " + (props.imc >= 40?"destaque":"")}>
                <div className="w-1/2 border text-center">Obesidade grau III</div>
                <div className="w-1/2 border text-center">Maior que 40</div>
            </div>
        </div>
    )
}
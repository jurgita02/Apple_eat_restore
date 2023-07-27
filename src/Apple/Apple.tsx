import { useState } from "react"

export default function Apple():JSX.Element{
    const[apple, setApple] = useState<string>("Apple");
    const [eaten, setEaten] = useState<boolean>(false);

    function eatApple():void{
       if (!eaten) {
      setApple("stub");
      setEaten(true);
    } else {
      setApple("Apple");
      setEaten(false);
    }    
    }

    return (
        <>
            <h2>{apple}</h2>
            <button type="button" onClick={eatApple}>Eat apple</button>
             {eaten ? "Restore Apple" : "Eat apple"}
        </>
    )

}
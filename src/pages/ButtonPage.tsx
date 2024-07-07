import { Button } from "../components/ui/button";

const ButtonPage = () => {
  return (
    <div>
        <Button variant="primary" size="sm">Demo</Button> 
        <Button variant="secondary" size="sm">Demo</Button> 
        <Button variant="danger" size="sm">Demo</Button> 

        <Button variant="primary" size="default">Demo</Button> 
        <Button variant="secondary" size="default">Demo</Button> 
        <Button variant="danger" size="default">Demo</Button> 
        
        <Button variant="primary" size="lg">Demo</Button> 
        <Button variant="secondary" size="lg">Demo</Button> 
        <Button variant="danger" size="lg">Demo</Button> 

        <Button variant="outline_primary" size="sm">Demo</Button> 
        <Button variant="outline_secondary" size="sm">Demo</Button> 
        <Button variant="outline_danger" size="sm">Demo</Button> 

        <Button variant="outline_primary" size="default">Demo</Button> 
        <Button variant="outline_secondary" size="default">Demo</Button> 
        <Button variant="outline_danger" size="default">Demo</Button> 
        
        <Button variant="outline_primary" size="lg">Demo</Button> 
        <Button variant="outline_secondary" size="lg">Demo</Button> 
        <Button variant="outline_danger" size="lg">Demo</Button> 
    </div>
  );
};
export default ButtonPage;

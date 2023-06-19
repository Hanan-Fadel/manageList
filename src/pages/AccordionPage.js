import Accordion from "../components/Accordion";

function AccordionPage() {
    
    const items = [
        {
            label: 'can I use React on a project?',
            content: 'You can use React on any project you want'
        },
        {
            label: 'can I use JavaScript on a project?',
            content: 'You can use JavaScript on any project you want'
        },
        {
            label: 'can I use CSS on a project?',
            content: 'You can use CSS on any project you want'
        }
    ];

    return (
        <div>
            <Accordion items={items}/>
        </div>

    );
}

export default AccordionPage;
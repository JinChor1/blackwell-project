"use client";
import Section from './Section';
import Content from './Content';
import { useState } from 'react';

type HorizontalTabsContentProps ={
    section: React.ReactNode,
    selectedSection?: React.ReactNode, // ignore if no content changed or style changed when selected
    content: React.ReactNode,
    selectedContent?: React.ReactNode // ignore if no content changed or style changed when selected
}

type HorizontalTabsProps = {
    data: Array<HorizontalTabsContentProps>
}

export default function HorizontalTabs({
    data
}: HorizontalTabsProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className=''>
            <div className='flex'>
                {data.map((each,index)=>(
                    <Section 
                        onClick={()=>{
                            setSelectedIndex(index)
                        }}
                        isSelected={selectedIndex===index}
                        key={'htab-section-'+index}
                    >
                        {selectedIndex===index && each.selectedSection? each.selectedSection:each.section}
                    </Section>
                ))}
            </div>
            <Content>
                {data[selectedIndex].selectedContent || data[selectedIndex].content}
            </Content>
        </div>
    );
}

"use client";
import Section from './Section';
import Content from './Content';
import { useState } from 'react';

type VerticalTabsContentProps ={
    section: React.ReactNode,
    selectedSection?: React.ReactNode, // ignore if no content changed or style changed when selected
    content: React.ReactNode,
    selectedContent?: React.ReactNode // ignore if no content changed or style changed when selected
}

type VerticalTabsProps = {
    data: Array<VerticalTabsContentProps>
}

export default function VerticalTabs({
    data
}: VerticalTabsProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className='flex justify-center gap-10 md:px-0 px-5 text-white'>
            <div className='flex flex-col justify-between md:gap-0 gap-5'>
                {data.map((each,index)=>(
                    <Section 
                        index={index}
                        onClick={()=>{
                            setSelectedIndex(index)
                        }}
                        isSelected={selectedIndex===index}
                        key={'vtab-section-'+index}
                    >
                        {selectedIndex===index && each.selectedSection? each.selectedSection:each.section}
                        { selectedIndex===index && 
                            <div className='md:hidden'>
                                <Content index={selectedIndex}>
                                    {data[selectedIndex].selectedContent || data[selectedIndex].content}
                                </Content>
                            </div>
                        }
                    </Section>
                ))}
            </div>
            <div className='hidden md:block'>
                <Content index={selectedIndex}>
                    {data[selectedIndex].selectedContent || data[selectedIndex].content}
                </Content>
            </div>
        </div>
    );
}

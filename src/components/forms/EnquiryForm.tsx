import Text from '../ui/input/enquiry/Text';
import TextArea from '../ui/input/enquiry/TextArea';
import Rounded from '../ui/buttons/Rounded';
import Country from '../ui/input/enquiry/Country';

export default function EnquiryForm() {
    return(
        <form className='grid md:grid-cols-2 gap-5'>
            <Text type='text' placeholder='Name' id='name' name='name' isRequired={true}/>
            <Text type='email' placeholder='Email' id='email' name='email' isRequired={true}/>
            <Text type='tel' placeholder='Mobile No.' id='tel' name='tel' isRequired={true}/>
            <Country isRequired={true}/>
            <div className='md:col-span-2'>
                <TextArea id='message' name='message' placeholder='Enter your message here'/>
            </div>
            <div className='md:col-span-2 flex justify-center'>
                <Rounded color='orange'>
                    Submit
                </Rounded>
            </div>
        </form>
    )
}
import Image from 'next/image';
import { bodyCss, headingFontCss, titleFontCss } from '@/components/css/fonts';
import { CheckOutlined, CloseOutlined, LockFilled } from '@ant-design/icons';

export default function WhyTejaSection() {
    return (
        <div className="relative py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${titleFontCss.className}`}>Privacy, sealed with your glance.</h2>
                    <p className={`text-lg md:text-xl ${bodyCss.className}`}>"Protecting your privacy is more than a duty for us; it's an essential component of our mission."</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 flex flex-wrap justify-center gap-10 md:gap-20 mb-20">
                    <div className="flex rounded-xl flex-col items-center max-w-md mx-auto">
                        <Image src={"/privacyPuppy.webp"}
                         alt="Teja Logo" width={300} height={300} layout="responsive" 
                         className='rounded-xl'
                        />
                    </div>
                    <div className="flex flex-col items-center max-w-md mx-auto">
                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <CheckOutlined className="absolute left-1 top-1 h-5 w-5 "/>
                                </dt>
                                <dd className="inline">Your journal is exclusively accessible by you.</dd>
                            </div>
                            
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <CloseOutlined className="absolute left-1 top-1 h-5 w-5 "/>
                                </dt>
                                <dd className="inline">We pledge never to commercialize your data.</dd>
                            </div>
                            <div className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                    <LockFilled className="absolute left-1 top-1 h-5 w-5 "/>
                                </dt>
                                <dd className="inline">Your data is securely encrypted.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}

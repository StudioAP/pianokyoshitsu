import React, { useEffect, useRef } from "react";
import newsData from "../data/news.json";

const Programs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fadeRefs = useRef<Array<HTMLDivElement | null>>([]);

  // アニメーション効果のためのIntersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      fadeRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="programs" className="py-8 bg-kyoto-light-green japanese-pattern">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Programs & Event - タイトルを日本語に変更 */}
          <div className="text-center mb-4">
            <h2 
              ref={(el) => (fadeRefs.current[0] = el)} 
              className="section-title text-kyoto-dark-green opacity-0 mx-auto text-2xl md:text-3xl"
            >
              プログラム&イベント
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Tennis Experience */}
            <div 
              ref={(el) => (fadeRefs.current[1] = el)} 
              className="opacity-0"
            >
              <div className="bg-white p-4 md:p-5 rounded-sm shadow-lg hover-lift">
                <h3 className="text-xl font-bold text-kyoto-dark-green mb-3">お試し１日テニス体験</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* 左に写真のみ - 比率を4:3に変更 */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-0 pb-[75%] relative rounded-sm overflow-hidden">
                      <img 
                        src="/images/お試し１日体験.jpg"
                        alt="テニス体験" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* 右にテキストをすべて配置 */}
                  <div>
                    {/* ボディコピー - ケイ囲みスタイル */}
                    <div className="border-2 border-kyoto-gold/30 bg-kyoto-cream/30 p-3 rounded-sm mb-4">
                      <p className="text-kyoto-dark-green font-medium text-sm md:text-base">
                      初めてでも安心！
                      会員が温かく迎えます。
                      一人でも友達とでも。 
                      平日でも週末でもOK！
                    </p>
                    </div>
                    
                    {/* 客観情報 - 統一スタイル */}
                    <div className="space-y-2">
                      <p className="text-gray-700 text-sm mb-2">京都ローンテニスクラブに興味を持たれた方は、まずはこの「お試し１日テニス体験」にお越しください。お電話で前日までにご予約ください。</p>
                      <p className="text-base font-medium text-kyoto-dark-green mb-3">
                        電話: (075)-741-2917（前日まで）
                      </p>
                      
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">当日は運動靴をご持参ください。（ラケットは無料貸出可）</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">体験料: <span className="font-bold text-kyoto-dark-green">¥500</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 会員＆ビジター交流会 - 左右2段組に変更し右側に写真を配置 */}
            <div 
              ref={(el) => (fadeRefs.current[2] = el)}
              className="opacity-0"
            >
              <div className="bg-white p-4 md:p-5 rounded-sm shadow-lg hover-lift">
                <h3 className="text-xl font-bold text-kyoto-dark-green mb-3">会員＆ビジター交流会</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* 左側にテキスト */}
                  <div>
                    {/* ボディコピー - ケイ囲みスタイル */}
                    <div className="border-2 border-kyoto-gold/30 bg-kyoto-cream/30 p-3 rounded-sm mb-4">
                      <p className="text-kyoto-dark-green font-medium text-sm md:text-base">
                        会員とビジターが気軽に参加できる交流イベントです。初めての方も安心して参加できます。
                      </p>
                    </div>
                    
                    {/* 客観情報 - 統一スタイル */}
                    <div className="space-y-2">
                      <p className="text-kyoto-dark-green font-medium text-sm mb-2">
                        不定期で開催します
                      </p>
                      
                      {/* {newsData.events[0].details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-kyoto-gold mr-2">•</span>
                          <p className="text-gray-700 text-sm">
                            {/* 参加費の場合は強調表示 */}
                      {/*      {detail.includes('参加費') ? (
                              <span>参加費: <span className="font-bold text-kyoto-dark-green">会員500円、ビジター1,500円</span></span>
                            ) : (
                              detail
                            )}
                          </p>
                        </div>
                      ))} */}
                      {/* Updated details based on user request */}
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">対象: クラス不問</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">お一人様でも参加大歓迎</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">参加費: <span className="font-bold text-kyoto-dark-green">会員500円、ビジター1,500円</span></p>
                      </div>
                       <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">募集人数: 30名程度</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 右側に写真 */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-0 pb-[75%] relative rounded-sm overflow-hidden">
                      <img 
                        src="images/kaiinvisitor.jpg"
                        alt="会員＆ビジター交流会" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* レディース交流会 - 左右2段組に変更し左側に写真を配置 */}
            <div 
              ref={(el) => (fadeRefs.current[3] = el)} 
              className="opacity-0"
            >
              <div className="bg-white p-4 md:p-5 rounded-sm shadow-lg hover-lift">
                <h3 className="text-xl font-bold text-kyoto-dark-green mb-3">レディース交流会</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* 左側に写真 */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-0 pb-[75%] relative rounded-sm overflow-hidden">
                      <img 
                        src="images/ladieskoryu.jpg"
                        alt="レディース交流会" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* 右側にテキスト */}
                  <div>
                    {/* ボディコピー - ケイ囲みスタイル */}
                    <div className="border-2 border-kyoto-gold/30 bg-kyoto-cream/30 p-3 rounded-sm mb-4">
                      <p className="text-kyoto-dark-green font-medium text-sm md:text-base">
                      女子会員の技術の向上を目的として、試合形式（ダブルス）の交流会を実施しています。
                    </p>
                    </div>
                    
                    {/* 客観情報 - 統一スタイル */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">日程: 毎月1回木曜日 10時～16時（予定）</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">対象: 会員およびビジター。クラスは不問です（お一人様でも参加できます）</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">参加費: <span className="font-bold text-kyoto-dark-green">会員500円、ビジター1,500円</span></p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">募集人数: 20名程度</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* コーチによるレッスン - 左右2段組に変更し右側に写真を配置 */}
            <div 
              ref={(el) => (fadeRefs.current[4] = el)} 
              className="opacity-0"
            >
              <div className="bg-white p-4 md:p-5 rounded-sm shadow-lg hover-lift">
                <h3 className="text-xl font-bold text-kyoto-dark-green mb-3">コーチによるレッスン</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* 左側にテキスト */}
                  <div>
                    {/* ボディコピー - ケイ囲みスタイル */}
                    <div className="border-2 border-kyoto-gold/30 bg-kyoto-cream/30 p-3 rounded-sm mb-4">
                      <p className="text-kyoto-dark-green font-medium text-sm md:text-base">
                      会員の技術の向上を目的として、初級・中級者を対象にコーチによるレッスンを行っています。
                    </p>
                    </div>
                    
                    {/* 客観情報 - 統一スタイル */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">日程: 毎週火曜日 14時～16時（予定）</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">対象: 会員およびビジター。クラスは不問です（お一人様でも参加できます）</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">参加費: <span className="font-bold text-kyoto-dark-green">会員500円、ビジター1,500円</span></p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">募集人数: 10名程度</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 右側に写真 */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-0 pb-[75%] relative rounded-sm overflow-hidden">
                      <img 
                        src="/images/coachresson.jpg"
                        alt="コーチによるレッスン" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 100歳大会 - 左右2段組に変更し左側に写真を配置 */}
            <div 
              ref={(el) => (fadeRefs.current[5] = el)} 
              className="opacity-0"
            >
              <div className="bg-white p-4 md:p-5 rounded-sm shadow-lg hover-lift">
                <h3 className="text-xl font-bold text-kyoto-dark-green mb-3">京都ローンテニスクラブ主催の試合（100歳大会）</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* 左側に写真 */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-0 pb-[75%] relative rounded-sm overflow-hidden">
                      <img 
                        src="/images/100ages.jpg"
                        alt="100歳大会" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* 右側にテキスト */}
                  <div>
                    {/* ボディコピー - ケイ囲みスタイル */}
                    <div className="border-2 border-kyoto-gold/30 bg-kyoto-cream/30 p-3 rounded-sm mb-4">
                      <p className="text-kyoto-dark-green font-medium text-sm md:text-base">
                      会員の日頃の研鑽の成果を試す機会として開催するダブルスの大会です。ペアの合計年齢100歳を中心に行います。
                    </p>
                    </div>
                    
                    {/* 客観情報 - 統一スタイル */}
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">日程: 11月（予定）</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">対象: 会員およびビジター。クラスは不問です（お一人様でも参加できます）</p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">参加費: <span className="font-bold text-kyoto-dark-green">会員2,000円</span></p>
                      </div>
                      <div className="flex items-start">
                        <span className="text-kyoto-gold mr-2">•</span>
                        <p className="text-gray-700 text-sm">募集人数: 50名程度</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs; 
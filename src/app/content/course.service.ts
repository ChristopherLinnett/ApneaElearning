import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  //data for aida2 course. In future this will be blank and returned by API call
  AIDA2Default = [
    {
      completed: false,
      innerModules: [
        {
          content:
            'Millions of people around the world enjoy snorkelling. Many of them will also take a big breath and dive down for a few brief moments to have a closer look at a colourful coral, a shy turtle – or just for the fun of it. That is where freediving begins. If you read this manual it is very likely that you have taken that big breath already many times before. In fact, freediving is a very common activity and by far more than an extreme sport as it is often depicted in the media.\nNew born babies enjoy being under water simply for the fun of it. Holding our breath and allowing the water to carry us seems to be part of human nature. Learning to freedive as adults is a way to re-discover these forgotten abilities. \nYour first lessons in freediving are mostly about letting go of unneeded physical and mental activity in order to allow yourself to relax. This might take time, but it will come. “Relaxation” is probably the most important word in freediving.',
          image: 'introduction.png',
          title: 'Introduction',
          videoLink: '',
        },
        {
          content:
            'The AIDA Education Program teaches recreational freediving. Competitions and record attempts are part of extreme freediving. Somewhere in between recreational and extreme freediving is a blurry line that separates the two.\n Looking for personal limits and taking a peek beyond them is probably part of human nature. This is exactly what you do when staying under water just a little bit longer than you would without a basic knowledge of freediving – you are exploring your own self. Freediving is very much about discovering new sensations by learning and developing new capabilities. Going one step beyond and shifting your momentary boundaries in a relaxed, comfortable manner – this is recreational freediving.\n Going for a world record, developing an even faster sled for deep diving – this means not only going beyond your personal boundaries, but also pushing the known limits of human capacity. Freediving in these dimensions requires total devotion to the sport and a deep commitment to the lifestyle of an athlete. This includes a strict training schedule, a rigorous diet, healthy sleeping patterns and so forth. In short, being a freedive athlete will outline your whole life. This is categorized as extreme freediving',
          image: '',
          title: 'Recreational and Extreme Freediving',
          videoLink: '',
        },
        {
          content:
            'In certain countries such as Spain, France, Italy, or others, freediving is also referred to as “apnea”. It is derived from the Greek word “apnoia” and literally translated stands for “without breathing”. Technically, freediving starts when you hold your breath in water. The importance of this simple definition cannot be overstated. All safety procedures that you will learn in the AIDA Education System become valid in the very moment a person is doing a breath hold in water. Obviously, this is the case in open water, but it is equally important to keep this in mind when holding your breath in swimming pools, or even in your bathtub. The primary directive in is thus:\n\n Always freedive with a qualified buddy\n\n In your AIDA Education you will learn how this simple rule, along with a few more, make freediving a very safe and enjoyable experience.',
          image: 'freedivingequalapnea.png',
          title: 'Freediving = Apnea',
          videoLink: '',
        },
        {
          content:
            'Freediving begins when you hold your breath in water. This encompasses a great variety of activities and explains the existence of the large range of specialities. Underwater hunting or spearfishing is just as much freediving as is underwater rugby or underwater hockey. The latter two are even getting played in leagues. Indeed, very different sports, but after all, all of them belong to the freedive family. All of these activities or sports have one point in common: Peaceful silence under water. No matter if you are hunting, or going for a world record in deep freediving, or if you take your camera down to a few meters; the way to approach freediving is Fun freediver exploring a reef. \n As freedivers we become one with the underwater world. It is the most natural way of being under water on a breath hold – just like any other mammal that lives in water. If we move gracefully and steadily and do not exhale bubbles, underwater life is much less scared of us. Curious fish will approach us. We do not need to “chase”, we only need to wait to be approached.\n Whatever your choice of freediving is, you can be assured to learn a great deal about yourself. Freediving confronts us with one of our deepest fears: The fear of drowning. In your AIDA Course you will learn why this will not happen. But fear is unlikely to diminish just through knowledge. Since the time we were babies, the “urge to breathe” has been drilled into us as a command of our body. We have learned to obey immediately, or damage will be done, as we assume. In freediving you learn that the “urge to breathe” is not hard wired – it is information about what is happening in your mind and your body. You will learn to deal with that information in a new and safe way.This takes some time and repetition. Soon you will get to the point where you would usually want to breathe. But you purposely decide not to, even if it is just for another few moments. This is where the freediving journey begins.Freediving can be done literally everywhere where you can find water: It certainly is a beautiful experience to visit warm and clear tropical waters to go down on a breath hold, but just as many apneists dive and train regularly in lakes, pools or even rivers.',
          image: '',
          title: 'A diverse activity',
          videoLink: '',
        },
        {
          content:
            'Maybe it is hardly possibly to explain the fascination of freediving to someone who has never tried before. Too often freedivers are talked down as thrill seekers or daredevils by people who have never experienced a single breath hold dive. Without doubt, it is exhilarating for freedivers to be amongst people who do not need an explanation for the inexplicable. That is why freedivers like to mingle with other freedivers – in real life as much as on the web – to exchange their experiences, tips and videos. This way a worldwide freedive community has established. Nowadays you can find freedive buddies and schools almost anywhere you go.The human body adapts to freediving. The more you freedive, the greater this adaptation and the more enjoyable freediving becomes. Even when you are not in the water you can perform a great variety of exercises and activities to support these adaptations. It may be by starting a regular - or change your existing - yoga practice, change of diet or dry apnea exercises. Soon you may also change your travelling plans to be in the water as often as possible.To some of us, freediving is a fun activity to do on holiday, for others however, it is a way of life.',
          image: 'awayoflife.png',
          title: 'A way of life',
          videoLink: '',
        },
        {
          content:
            'Freediving always happens in a group of at least two people – the buddy team. You will discover that freediving connects you with your buddy in a very intense way. Through the trust you have to build up and responsibility to watch each other’s back, many friendships have been formed. Whatever it is you see in freediving, through the AIDA Education Program you will quickly discover how freediving is enjoyable and – if you want it to be – a school for life.',
          image: 'asocialactivity.png',
          title: 'A social activity',
          videoLink: '',
        },
        {
          content:
            'Established in 1992, AIDA stands for the French term “Association Internationale pour le Développement de l’Apnée”, the international association for apnea development. The organisation was initially French and it is now based in Zürich/Switzerland.AIDA is committed to paperless administration as much as legally possible. The organisation thus uses the website www.aidainternational.org as its major means of communication.',
          image: '',
          title: "The acronym 'AIDA'",
          videoLink: '',
        },
        {
          content:
            'AIDA is a non-profit organisation. In their day-job, most people working for AIDA are specialists in their fields of trade. For example, the AIDA Medical Commission consists of leading Emergency Room specialists, trauma experts and experienced diving doctors. Their day job keeps them up to date in their respective topics, which in turn allows AIDA to be at the forefront of latest science and experience.The national AIDA organizations largely rely on volunteer work to organise meetings, courses and competitions. Apart from experienced instructors or judges, these events always ask for a lot of manpower in administration, printing, driving around, helping hands here and there and good souls. Volunteering in an AIDA event isgreat fun and a perfect way for you to get to know your local freedive community!You can find your national AIDA organization through the official AIDA website.',
          image: '',
          title: 'Non-profit organization',
          videoLink: '',
        },
        {
          content:
            'The goal of the AIDA Education Program is to share the knowledge and skills to enjoy freediving in a safe and responsible way. It caters for absolute beginners as much as for advanced freedivers and takes you through a comprehensive, professional qualification structure all the way up to AIDA Instructor level. Freediving has probably been around since the dawn of mankind. Just look at the phenomenal Japanese pearl diving Amas, the Greek sponge collectors or the Filipino, Indonesian or Malaysian water tribes with their spectacular underwater hunting capabilities. Compared to that, recreational and competitive freediving as we know it today is still a very young phenomenon. Because of that, the learning curve in modern freediving is still steep. Techniques get introduced, refined, adapted, and replaced all the time.The AIDA Education Program is kept on top of this rapid development by regular revision and adaptation to the latest research in order to remain the standard of worldwide freediving Education since its inception in 1992.',
          image: 'freedivingeducationprogram.png',
          title: 'Freediving education program',
          videoLink: '',
        },
        {
          content:
            'Best practice in safety standards is obviously the most important part of AIDAFreedive Education. Competition rules and education programs always follow the latest safety standards, which cannot be compromised. It is well possible that you will have encounters with freedivers, spear fishers or snorkelers that enjoy their freediving in a completely different way from what you are taught by your AIDAInstructor. Different knowledge and opinions of these - sometimes very experienced - water(wo)men does not qualify them as incapable, but it shows how quickly modern freediving still evolves',
          image: '',
          title: 'Freediving safety standards',
          videoLink: '',
        },
        {
          content:
            'Last but not least, AIDA oversees all official freediving competitions as well as national and international records. Trained and certified AIDA Judges implement and supervise the application of all valid safety standards on various levels – from a small local competition up to the yearly AIDA World Championships.',
          image: '',
          title: 'Freediving competitions & world records',
          videoLink: '',
        },
      ],
      title: 'INTRODUCTION TO FREEDIVING',
    },
    {
      completed: false,
      innerModules: [
        {
          content:
            'The goal of the AIDA2 Freediver Course is to allow you to gain a good understanding of freediving. From the duck dive, over finning technique to equalisation – you will learn all basic skills, step by step. Many freediving novices are concerned about numbers, such as minutes of breath hold or depth of a dive in order to become a certified freediver. In fact, the numbers show that you have mastered the basic skills and thus meters and seconds are not the primary concern.',
          image: '',
          title: 'Introduction',
          videoLink: '',
        },
        {
          content:
            'To enroll in an AIDA2 Course you must be able to swim at least 200m non-stops without fins and at least 300m non-stops with mask, fins and snorkel. The AIDA2 Course is designed for beginners with no previous experience in freediving. It is not required having completed the AIDA1 Course.',
          image: '',
          title: 'Prerequisites',
          videoLink: '',
        },
        {
          content:
            'Freediving is for everyone and there is no specific diving background needed. All other forms of diving (scuba, technical, etc.) mainly focus on how to handle your dive equipment in a safe and efficient way. In freediving the primary skills you learn is how to handle yourself, and then how to deal with gear.The greatest advantage for beginner freedivers is to feel comfortable in water, to allow it to carry you, and to be able to “let go”. Being comfortable in water is of course related to how much time you already spent in water, be it as a scuba diver, a surfer or a swimmer – the more, the better.',
          image: '',
          title: 'Not only for divers',
          videoLink: '',
        },
        {
          content:
            'Freediving is a very safe, enjoyable and very common activity in water. Still, it often is depicted as an extreme sport, meant for only a daring few. This is how freediving is often portrayed in media and results in a huge gap in perception. Freediving is in fact very safe if – and that is a very important “if” - you stick to a few basic but crucial rules. The most important ones are: \n Always freedive with a buddy \n  Relax before you hold your breath \n  Be correctly weighted \nTo properly learn and apply these rules is the main goal of the AIDA2 Course. Higherlevel follow-up courses will then build up on these basic techniques to take you deeper into water, deeper into the experience of yourself, one step at the time.',
          image: '',
          title: 'Be a safe freediver',
          videoLink: '',
        },
        {
          content:
            'For most AIDA Instructors, teaching freediving is not what they do for life, but what they live for. They offer training on a club basis, mostly in pools, sometimes in lakes or the sea – freediving is so diverse that you can find an AIDA Instructor almost everywhere on the planet. Only a few instructors actually make their living from teaching and thus, live and work in a place where open water freediving is possible on a daily basis. Part of AIDA Instructor Training is to write a paper about freediving. The candidates are asked to make best use of their personal or professional background and add to the already existing body of knowledge. A physiotherapist for example may add specific valuable techniques and information to his/her teaching, and so can an engineer in hydrodynamics. Hence, it is a great advantage that AIDA Freedive Instructors come from very diverse backgrounds and often stay in their daily trades. The relationship between teacher and student always depends on the personalities involved. A certain AIDA Instructor might be perfect for you in his/her competitive thinking and approach, while the same instructor can be daunting to others. One student prefers to be instructed “hands on” on how to use muscles correctly, while another one does not like to be touched at all. Instructors are not machines, but professionally trained individuals with a variety of characters and backgrounds. An open communication between the instructor and the students is key to a pleasant experience on every level of freediving, but especially in the beginning when you take your first steps into liquid. Do not be ashamed – tell your instructor about your fears and let him know about your anxiety or how exited you are. It is perfectly fine to be a little bit on the edge, but not over it. Your instructor can handle it and will take care of you',
          image: 'diversebackgrounds.png',
          title: 'Diverse backgrounds of freedive instructors',
          videoLink: '',
        },
        {
          content:
            'Since its inception in 1992, AIDA developed a comprehensive set of standards and guidelines how to teach freediving. The AIDA Education System is growing and constantly evolving due to over twenty years of teaching experience, competition results and record surveillance, combined with the latest research in the field of water related science.The AIDA Education System provides a comprehensible framework for teaching freediving in a safe way. This framework allows and asks of every AIDA Instructor to add (but not omit) information, techniques and teachings, and make best use of his/her personal background and experience.The AIDA Education System gets reviewed and updated regularly.',
          image: '',
          title: 'Standardised Education',
          videoLink: '',
        },
        {
          content:
            'While the Instructor’s performance and experience as an athlete can be a plus, the best athlete is not self-evidently the best coach or instructor. Encountering obstacles in one’s own education and training helps the AIDA Instructor later to understand students’ needs and problems.The AIDA Education System is a framework that defines sets of skills, which have to be taught in every AIDA Freediving course. To some extent it is then up to the AIDAInstructor, how to teach you these skills. A competitive and directive instructor will probably be a very good teacher for you if your desire to become an athlete and to train on a full year basis. If you are more interested in breath-hold photography, you might want to look out for an instructor who does exactly that, and so on. All AIDA Instructors will teach you the same basic knowledge and skills that are defined in the AIDA Education System – and what they will add to that, what you will learn beyond the written word, that is up to you and your instructor of your choice',
          image: '',
          title: 'Athlete does not equal Instructor',
          videoLink: '',
        },
        {
          content:
            'You can start any AIDA Course with one instructor and finish it later with another. The only constraint is that you have to continue your education within one year. It is also quite common that several instructors share the teaching during one course.',
          image: '',
          title: 'Multiple Instructors Possible',
          videoLink: '',
        },
        {
          content:
            'Your instructor handles your registration with AIDA International and you will receive an automatically generated message to the email-address you have supplied to your instructor. This message contains a link to EOS, the AIDA Education Online System, in which you mention some personal data, including your postal address.Please check if you have received an email from EOS right after you handed in your details to your instructor. It is well possible that you will have to also check your spam folders, as automatically created messages tend to end up there. It is important that you provide accurate and up-to-date information, also by logging in to your EOS account anytime later in case you need to change some details. ',
          image: 'registration.png',
          title: 'Registration with AIDA / EOS',
          videoLink: '',
        },
        {
          content:
            'Before starting your AIDA Course you will need to provide some important paperwork to your instructor. This way AIDA makes sure that you are fit for and aware of the risks of freediving',
          image: '',
          title: 'Paperwork',
          videoLink: '',
        },
        {
          content:
            'The AIDA Medical Statement states potential reasons for not making it possible for you to freedive. It is similar to the list of questions used in scuba diving. All questions ticked NO means you are set to start your freedive course. Any answer ticked YES means you will have to provide written medical clearance by a qualified doctor. For this, ask your doctor to use the designated part of the form. Be honest about your medical condition and mention previous minor surgeries or mild cases of asthma. In case you are embarking to a remote island for doing your AIDA Course, please make sure that you are in possession of any needed paperwork BEFORE you leave your home destination. The medical statement must be filled in, signed and handed in to your AIDA Instructor at the beginning of the course',
          image: '',
          title: 'Medical Statement',
          videoLink: '',
        },
        {
          content:
            'In many countries you will have to hand in a signed AIDA Liability Release prior to any in-water activity. This form is to emphasise that freediving is an absolutely safe activity as long as you follow the rules indicated and taught by your instructors. AIDA Courses have an impeccable safety record in more than 20 years of teaching, and we would like to keep it that way. This waiver says that you have understood that you are the most important part of freediving safety.',
          image: '',
          title: 'Liability Release',
          videoLink: '',
        },
      ],
      title: 'INTRODUCTION TO AIDA2',
    },
    {
      completed: false,
      innerModules: [
        {
          content:
            'Here is an important fact about breathing in freediving: It is overrated! There is no magic breathing technique that will give you a safe breath-hold of several minutes. The word “safe” is a very important one in this context. The still young history of freediving is overflowing with discoveries and teachings of spectacular breathing patterns, but experience and modern science shows that they all have one thing in common: They are unsafe for beginners.In this chapter you will learn how to achieve great results in the safest way. The key to a long breath hold can be summarised in one word: relaxation.',
          image: 'breathingcycle.png',
          title: 'Introduction',
          videoLink: '',
        },
        {
          content:
            'At any given time of resting your blood is fully saturated with Oxygen. You can easily prove this to yourself by putting an Oximeter (device to monitor level of oxygen in your blood) on a finger. The reading for a healthy person is always between 96% and 99%, which is the achievable maximum. If your reading is not within these limits, it is either because you are exerted or you have a specific health condition. Both are indicators that you should not freedive or even hold your breath at this moment.Being fully saturated with Oxygen at any given time leads us to a striking conclusion: The preparation for holding your breath has nothing to do with “oxygenating the body”! Instead, the last phase before a breath hold is about physical and mental relaxation and focus. The more relaxed you are physically and mentally, the less Oxygen you are using. This is what enables you to hold your breath safely for an extended time',
          image: '',
          title: 'Oxygen (02) Saturation',
          videoLink: '',
        },
        {
          content:
            'Every breath hold is a cycle of the four above phases.These four phases will be explained step-by-step in this chapter. You can try out everything as you read, and then go into your first full breath hold cycle. Feel free to explore in the dry while lying down on your bed or on a yoga mat. As soon as you feel like holding your breath in water, the first and most important safety rule of freediving applies: Always freedive with a buddy. A lifeguard at the other end of the pool is not good enough. A person qualified to perform freediver rescue techniques needs to watch over you at all times',
          image: 'breathholdcycle.png',
          title: 'The Breath Hold Cycle',
          videoLink: '',
        },
        {
          content:
            'We differentiate between two ways of breathing: The more common way of breathing is happening in the upper part of the chest and is consequently called chest breathing. The more unknown other part of breathing is happening below your chest and expands your belly on every inhalation. It is thus also called belly breathing.It is important to know that you can apply belly breathing at any time, most likely you do it unconsciously while you are sleeping, and for sure you did it in your very early days: Babies can only breathe into their bellies. Their muscles have not yet developed to be able to breathe also in the upper part of the torso.When you read “belly breathing” keep one of these pictures in your mind, either the happy baby with the round, soft belly, or imagine yourself sleeping peacefully.In advanced freediving you will learn spectacular exercises to enhance the functionality of your breathing muscles. It is important to note that these exercises are only intended for your dry training, but should not be applied directly before diving.',
          image: 'bellychestbreathing.png',
          title: 'Belly vs. Chest Breathing',
          videoLink: '',
        },
        {
          content:
            'The relaxation phase is the time before your breath hold. The goal of this phase is to become completely relaxed, physically as much as mentally. Being physically relaxed means to let go of any unneeded muscle tension, while mental relaxation implies to be focused on the task at hand, to be in the here and now. Thinking uses Oxygen, so being focused also means to keep the mind from wandering.In other words, you are preparing for a breath hold by doing less and less, until you do nothing at all anymore.As your physical and mental relaxation gets deeper and deeper, you will notice that also your breathing gets calmer. The more relaxed you become, the less air you need. Your body will always breathe the exact right amount of air in and out according to the current state of activity. There is no need to interfere with that perfectly balanced mechanism. All of a sudden it becomes easy not to breathe for a moment.',
          image: '',
          title: 'Relaxation Phase',
          videoLink: '',
        },
        {
          content:
            'Apply belly breathing at all times during the relaxation phase.',
          image: '',
          title: 'Belly Breathing',
          videoLink: '',
        },
        {
          content:
            'It sounds simple, but it is quite a difficult task to stop the mind from thinking for more than a few brief moments. As keeping the mind from thinking is probably not possible, second best is to focus the mind: Apply a relaxation exercise.A relaxation exercise is a form of mental training, a process of a few brief moments up to several minutes where the mind is kept focused on a task that is physically relaxing. This way both goals of the relaxation phase are achieved: The mind is kept from wandering or worrying by focusing on the task at hand, and as a consequence the body in fact gets gradually more relaxed.Examples for relaxation exercises are the “Body Scan”, “Mental Torch”, “Point of Contact” or “Changing Colours of Breath”. There are literally thousands of relaxation exercises, which you can learn from your yoga teacher, the Internet, or a plethora of books. Pick a relaxation exercise and apply it several times before every breath hold. The more often you apply an exercise, the better it will work for you. After a few repetitions it feels like pressing a “relaxation button” with almost instant effect.',
          image: '',
          title: 'Relaxation Exercise',
          videoLink: '',
        },
        {
          content:
            'Lay down on your back, hands apart, palms facing up, legs apart. Close your eyes. Imagine yourself in complete darkness. Then you find that little light and guide it to shine on the big toe of your right foot, it gets warm, heavy and soft, and you allow it to sink down towards the ground. You shine the light onto then next toe and feel how it sinks down to the ground, warm, heavy and soft. You move the light from toe to toe.. etc.”You instruct yourself through every muscle group of your body until reaching the face, especially the neck, eyelids, eyebrows, eyeballs, jaw, lips and tongue.Gently bring your mind back to the exercise when you catch it wandering or worrying. Final instruction: Feel the whole body as one.',
          image: '',
          title: 'Example Relaxation Technique',
          videoLink: '',
        },
        {
          content:
            'The one full breath is a long and deep inhalation to fill our lungs with as much air as possible. The focus remains on relaxation. It makes not much of a difference if we can access the very last bit of our lung capacity but pay for that with the build up of a lot of tension',
          image: '',
          title: 'One Full Breath',
          videoLink: '',
        },
        {
          content:
            'Filling the lungs completely takes time. You can try this yourself: Inhale as much air as you can in one second. You will notice that only the chest expands and you can only access a part of your lung volume. So, again, take your time. Top freedive athletes allow themselves up to one minute to fill their lungs completely. Of course you do not need to go that far, but go as slow as you comfortably can. You will notice that you will slow down even more after a few repetitions.',
          image: '',
          title: 'Breathe in Slowly',
          videoLink: '',
        },
        {
          content:
            'As the name says, you take only one full breath. Remind yourself that your body’s saturation with Oxygen was already at its maximum even before you started your relaxation phase. Taking more breaths does not mean storing any more Oxygen – there is no space for more tea in a cup that is already full.',
          image: '',
          title: 'There can be only one',
          videoLink: '',
        },
        {
          content:
            'Start your one full breath with an exhalation that reaches a little bit deeper than it naturally would. This way it will be easier for you to feel the air flowing deeply into your belly once you start inhaling.\n Stage one: belly breathing. Focus on your belly, feel how it is expanding softly and steadily. Take your time and keep your total relaxation. When your belly is fully expanded, then you switch to stage two. \n Stage two: chest breathing. Keep inhaling in a steady flow by expanding your chest. Keep your relaxation also in this phase and make sure that only the muscles on the side by your ribs are active. Become aware of keeping your shoulders and neck soft, while you go on inhaling into your chest until you feel comfortably full. ',
          image: 'twostagebreathhold.png',
          title: 'Two Stage Full Breath',
          videoLink: '',
        },
        {
          content:
            'Remember: There is no gain in pushing in the last bit of air into your lungs if this happens at the sacrifice of your relaxation.You have finished your one full breath. Note that inhaling is a process that takes muscle activity – but holding the air in is not! You achieve this by shutting your throat, or, to be precise, you are tensing the muscles surrounding the vocal cords. If you are not sure what this means, then try this: Imagine you are lifting a heavy weight. When mobilizing all your strength you will automatically exhale and then all of a sudden lock your throat with a loud sound similar to “hhhhak!”. That action in your throat will keep the air from flowing out despite the pressure you apply by lifting the heavy weight.After finishing the one full breath, shut your throat the same way to keep the air in your lungs. This allows you to let go of any tension that you built up during inhaling. Now, as you hold your breath, return to your relaxation exercise, check for any tension and enjoy the moments of pure silence!',
          image: 'twostagebreathhold.png',
          title: 'Two Stage Full Breath-continued',
          videoLink: '',
        },
        {
          content:
            'While holding your breath in water you will always keep your air in your lungs until surfacing. This is true for every form of freediving. There are a few exceptions to that rule in advanced training, but then a freediver will always announce to the buddy that he or she will exhale. If there is no such announcement, escaping air is considered a sign for a freediver in trouble.',
          image: '',
          title: 'Breath Hold',
          videoLink: '',
        },
        {
          content:
            'The first moments of a breath hold are very blissful and quiet - not even the sound of breathing is disturbing the silence. Put an unnoticeable smile on your face and enjoy it!If you have not yet done so, now is a good time to resume your relaxation exercise. Check your body, muscle by muscle – you might detect tension you have built up unnoticed. Let go of it, find your absolute relaxation again and keep smiling at yourself.',
          image: '',
          title: 'Relaxation',
          videoLink: '',
        },
        {
          content:
            'Some freedivers say that this first part of their breath hold feels like a wide-open window through which they can see a beautiful landscape. After a while, this window starts to close upon them and this is the moment when we usually would breathe. The question is, why breathing?There are actually two reasons why we breathe. First, it is a habit. We are used and very well trained to breathe. Most likely the first thing that you will notice after holding your breath for a while is a thought in your head which might say something like “hang on, I used to breathe at this moment, I think it’s about time to resume that!”Secondly, you feel the build up of Carbon Dioxide (CO2) in your body. Our breathing is to a great extent regulated by the tendency to maintain a steady level of CO2 in the blood. So, when we are physically active, for example while jogging, we automatically breathe more to exhale that excess of CO2 produced by our muscles. CO2 is the waste product of any activity. The more active we are, the more CO2 we produce, and the more we breathe. To say it clearly: Breathing is largely regulated by the need to exhale excess CO2, not by the need to inhale fresh Oxygen!',
          image: '',
          title: 'CO2 Build Up',
          videoLink: '',
        },
        {
          content:
            'This means, during a breath hold the CO2 level in our body will rise. The more relaxed we are, the slower it rises – but still it will rise. After some time it will reach a level that is noticeable to us and we get what we would call “the urge to breathe”. Holding your breath is a re-assessment of the sensation of rising CO2: For the untrained person, rising of CO2 is an imperative to breathe. For a trained freediver, it is a sensation, or, information. It does not mean that you are already low on Oxygen.Even if you have held your breath before, it is quite unlikely that you have felt or experienced a lack of Oxygen. The urge to exhale CO2 is usually much more noticeable during a breath hold. In this course you will start to create an awareness of rising CO2levels. How to deal with low O2 will be a topic in the more advanced AIDA Freediving Courses.',
          image: 'co2buildup.png',
          title: 'CO2 Build Up-continued',
          videoLink: '',
        },
        {
          content:
            'At a certain point into your breath hold you might start to feel a first contraction of parts of your breathing muscles. This is your body trying to resume to breathe to exhale the accumulated CO2. Again, it does not mean that you are low on Oxygen! Allow the contraction to happen and stay relaxed, so that the muscles can release the tension and become soft again',
          image: '',
          title: 'Contractions',
          videoLink: '',
        },
        {
          content:
            'Relax into your contractions. You cannot and you should not try to avoid contractions but rather look at them as your internal timer for your breath hold: Maybe your first contraction will come as such a surprise that you end the breath hold right there. That is perfectly fine because now you can prove to yourself that you are fine, your lips are rosy (which is a sign of normal blood oxygenation) and you feel good. The message to yourself is this: “I feel good with one contraction – I wonder what happens next!”Now make a plan for your next breath hold. How about “first contraction and then count to ten”. So after a nice long relaxation phase you take one full breath and start your second breath hold, very relaxed and with a fantastic view out the window. Then the first contraction comes again, so you start counting, slowly and steadily. At the count of “ten” you lift your head out of the water and resume breathing. The message to yourself is now the following: “I feel good with one contraction plus counting to ten – I wonder what happens next!”So you make a new plan for the third breath hold – maybe you will count to fifteen, or twenty? Choose a number that you are comfortable with and prepare for the next round. Maybe in this round, maybe in the next one you will get your second contraction. Your contractions become your timer: You can plan your breath holds by the number of contractions. Always increase the number a little bit at a time, end the breath hold at the planned number of contractions to prove to yourself that you are fine with that number as well.Before you know it you will count up to very large numbers of contractions – they are your new best friends.',
          image: '',
          title: 'Tip',
          videoLink: '',
        },
        {
          content:
            'By this time you have already figured out that holding your breath is less of a physical and more of a mental challenge. Your mind is simply not used to not breathing. Despite better knowledge, your mind will come up with all sorts of reasons and excuses why you cannot go on holding your breath right now. It is maybe because you are not perfectly relaxed, or your one full breath was not actually that full, or today is a bad day in general. Whatever reasons your mind comes up with in order to stop that breath hold right now; convince yourself that you can deal with it despite all your thoughts or opinions about the current situation. The fact that your mind will try to convince you that you need to breathe right now imposes a very interesting question: Who is in charge – your mind or you?Without going too deep into that fundamental philosophical question: You are in charge and it is your decision when to end a breath hold. It is fair to say that this is a game that you play with your mind. When thoughts pop up in your mind, look at them as an unattached observer and let them pass. Just like you are looking at clouds, how they form, change shape and disappear without your involvement. This is the mind game of holding your breath. ',
          image: '',
          title: 'Mind Game',
          videoLink: '',
        },
        {
          content:
            'Tip: Not to think is not easy, so try feeding your mind with positive thoughts. While holding your breath, create your personal happy place. Maybe this is a childhood memory, a fantasy, or even a real place that you have visited recently: Recreate that place in your mind as realistically as possible, count the steps, smell the scents of the flowers, hear the voices of people that might be around.Tip: Use the sounds that are actually there, in the pool or confined water, while you hold your breath. Build these noises into your happy place: A propeller of a boat nearby becomes a beautiful bird that you can see dancing in the air, or the sound of the pool’s water pump becomes a cable car, lifting you up to the top of a mountain.',
          image: '',
          title: 'Tip',
          videoLink: 'https://player.vimeo.com/video/98248368?h=b07c483b47',
        },
        {
          content:
            'As we learned earlier, your breath hold does not end when you surface; it ends when you have resumed breathing',
          image: '',
          title: 'Recovery Breathing',
          videoLink: '',
        },
        {
          content:
            'Recovery breathing is a safety concept. It is the technique how to breathe in order to properly finish a breath hold. What you need now is to inhale fresh Oxygen. Make it a habit to end every breath hold with recovery breathing!And this is why: As you progress and train as a freediver, it may happen that you surface from a dive and have pushed it a bit too far which means that you are actually low on Oxygen. In such a situation, rational thinking does not happen anymore, you will simply do what you trained your body to do – recovery breathing. This is the reason why recovery breathing is an integral component of every dive: You train your body that every breath hold – be it a dive at the surface or to depth – ends with recovery breaths. Once you get into that low-Oxygen situation and your rational thinking comes to a halt, your body will automatically do what you trained it to do: Recovery breathing to restore the gas levels in your body to normal in the shortest possible time!',
          image: '',
          title: 'Safety Concept',
          videoLink: '',
        },
        {
          content:
            'As you always surface with all your air still in your lungs – remember, a freediver never exhales during the dive – the first exhalation is nothing more than opening your airways and letting the air flow out from your lungs.',
          image: '',
          title: 'Relaxed Passive Half Exhalation',
          videoLink: '',
        },
        {
          content:
            'After the passive exhalation, a quick inhalation follows, just as if you would say “hope” on a big inhale. This quick inhalation will not fill up your lung completely, but a big enough quantity of fresh air will enter your body.This “hope” inhalation is followed by another passive exhalation – just let the air flow out from your lungs again.',
          image: '',
          title: 'Quick Full Inhalations',
          videoLink: '',
        },
        {
          content:
            'Repeat this sequence of quick inhalations and passive exhalations at least three times. Do more of them if you feel like it.Recovery breathing is a very active way of breathing with big breaths and lots of noise. Of course when you do that for example right now, it might make you dizzy, as you are breathing way too much air in and out. But after a breath hold, the situation is a different one as you are high on CO2 and low on Oxygen. Recovery breathing is the best way to reset these levels in the fastest and safest way.',
          image: '',
          title: 'Repeat 3 Times',
          videoLink: '',
        },
        {
          content:
            'It is perfectly ok for you to do this full breath hold cycle – relaxation, one full breath, breath hold and recovery breathing – while laying down on your bed. The more often you do it, the better. Make sure that the relaxation phase takes at least two minutes between two breath holds.There are many breathing exercises available, offering different sets of rules for training purposes. You will learn about these in the AIDA3 and AIDA4 Courses. ',
          image: '',
          title: 'Dry Breathing Exercises',
          videoLink: '',
        },
      ],
      title: 'FREEDIVE BREATHING CYCLE',
    },
    {
      completed: false,
      innerModules: [
        {
          content: '',
          image: '',
          title: 'The Respiratory System (Video)',
          videoLink: 'https://player.vimeo.com/video/98246632?h=a5190326ef',
        },
        {
          content:
            'The first stage of the airflow into our body is the nose and the mouth. In general it is good advice to breathe through the nose, however, in freediving the breathing happens mostly through the mouth. In most cases you will wear a mask or a nose clip to keep water from entering your nose, thus, making it necessary to breathe through your mouth. After passing the mouth the inhaled air travels through the windpipe or the trachea, which is a fairly rigid tube made of smooth muscle and several c-shaped rings of cartilage. At its lower end, the trachea divides into two main bronchi.The bronchi are structurally similar to the trachea, but are the first part of the lungs, or what is also called the bronchial tree. Through several stages the bronchi branch off into tiny bronchioles from which we have about 30’000 in each lung. At the end of the branches lie the alveoli where the gas exchange in the lungs takes place. They can be considered as the millions of leaves of the (bronchial) tree. ',
          image: '',
          title: 'Elements of the Respiratory System',
          videoLink: '',
        },
        {
          content:
            'The gas exchange in the alveoli has two main purposes: Absorbing Oxygen (O2) and releasing excess Carbon Dioxide (CO2).For every action in the body Oxygen is needed. Bodily functions are fueled from stored forms of energy, but it takes Oxygen to replenish these energy reservoirs. With every inhalation we allow fresh air to enter our lungs, carrying a good amount of Oxygen.Almost every action in the body creates Carbon Dioxide as a waste product. Every muscle that we move, every thought that we think, every image that we create, everything we hear, see, taste or touch creates activity in the brain, which in turn creates CO2. With every exhalation, we get rid of a certain amount of excess Carbon Dioxide accumulated in our body',
          image: '',
          title: 'Gas Exchange',
          videoLink: '',
        },
        {
          content: '',
          image: 'circulatorysystem.png',
          title: 'The Circulatory System',
          videoLink: 'https://player.vimeo.com/video/98246631?h=295c713017',
        },
        {
          content:
            'The circulatory system of the blood is made of two loops. The systemic circulation delivers Oxygen to all tissues in the body, and returns excess Carbon Dioxide back to the heart. The pulmonary circulation delivers this excess CO2 to the lungs where it can be exhaled. With the next inhalation, Oxygen is collected and then carried back towards the heart, where the blood enters the first circulation again.',
          image: '',
          title: 'Two Cycles: Lungs and Body',
          videoLink: '',
        },
        {
          content:
            'Every red blood cell carries the protein hemoglobin, which bonds with Oxygen. The total amount of Oxygen carried by our body at any time is thus:O2 stored in the air in the lungs plus the O2 stored in the blood',
          image: '',
          title: 'O2 Bonded with Haemoglobin',
          videoLink: '',
        },
        {
          content:
            'CO2 gets transported dissolved in the blood plasma. This is similar to gas dissolved in soda water. ',
          image: '',
          title: 'CO2 Dissolved in Blood Plasma',
          videoLink: '',
        },
        {
          content: '',
          image: 'mechanicsofbreathing.png',
          title: 'The Mechanics of Breathing (Video)',
          videoLink: 'https://player.vimeo.com/video/98246630?h=cca0e3775a',
        },
        {
          content:
            'The main breathing muscle is the diaphragm. This large muscle separates the upper thoracic cavity from the lower abdominal cavity. As the diaphragm contracts, the thoracic cavity increases in volume and air flows into the lungs. At the same time the volume below the diaphragm gets compressed which looks like the belly is getting inflated. This is why abdominal breathing (breathing by just using the diaphragm) is also called “belly breathing”. The belly looks like it is inflating and deflating, even though there is no air flowing into it of course.',
          image: '',
          title: 'Diaphragm',
          videoLink: '',
        },
        {
          content:
            'Breathing – especially filling the lungs completely – is supported by the action of the intercostal muscles and other accessory breathing muscles. These are groups of muscles that expand and shrink the chest cavity and thus help to fill or empty the lungs.A combination of diaphragmatic and thoracic breathing will allow you to access a great majority of your lung volume in a simple and very effective way. Your instructor will teach you “two stage breathing” in order to access your diaphragm first, and then fill up your lungs by activating the intercostal muscles. This is referred to as the one full breath, which you take before you hold your breath',
          image: '',
          title: 'Intercostal Muscles and Accessory Breathing Muscles',
          videoLink: '',
        },
        {
          content:
            "While the process of inhaling is active, exhalation is mainly passive. Exhaling simply happens by relaxing muscles involved in breathing. This allows the diaphragm to move upwards towards the thorax and thus pushes the air effortlessly out from the lungs. Also, once the (external) intercostal muscles are relaxed, they will return to their resting position and also push air out from the lungs.Inhaling efficiently is a skill to be learned, while exhaling is more about just 'letting go'",
          image: '',
          title: 'Inhale - Active, Exhale - Passive',
          videoLink: '',
        },

        {
          content:
            'All physical and mental activity creates CO2. This Carbon Dioxide gets dissolved in the blood plasma and is transported back towards the lungs where it will be exhaled with the next breath. While being dissolved in the blood plasma, CO2 raises the acidity of the blood (= lowering the pH of the blood). This change of acidity is then registered by chemoreceptors in the brain stem, and further in the aortic and carotid bodies. Once registered it automatically initiates an increase of breathing volume and frequency to offload the surplus of CO2.For example, when you are jogging you produce more CO2 than when resting. This surplus of CO2 gets dissolved in the blood, lowering its pH level slightly. After the blood has been pumped around your body it will eventually reach your brain stem. Once this slight change in pH is registered you will automatically start breathing more deeply and at a higher frequency. The body starts to maintain the neutral level of CO2 by exhaling a bigger volume of air',
          image: '',
          title: 'Neutral Level of CO2',
          videoLink: '',
        },
        {
          content:
            'Once you stop jogging, the breathing will slowly calm down and finally reach its normal rhythm when the CO2 in the blood has returned to its neutral level.An important note before we start: If you hold your breath in water you always need to have a trained buddy watching over you. There is no exception to this rule. But it is safe to do breath holds alone “in the dry”, for example while resting flat on your back.',
          image: '',
          title: 'Neutral Level of CO2-continued',
          videoLink: '',
        },
        {
          content:
            'For a healthy person that has not undergone breath hold training it is not possible to stop breathing for a very long time. Lie down on your bed and try for yourself. Even fully relaxed you produce a certain amount of CO2 in your body. Now that you have stopped breathing and thus have also stopped exhaling this surplus of CO2 you will see that the CO2 level in your blood will soon trigger what is commonly called the “urge to breathe”. If you choose to still go on a few moments longer with your breath hold, the CO2 rises past the level that your body and mind can tolerate. That is when the “urge to breathe” gets irresistible.What is commonly called the “urge to breathe” is mainly information about the current CO2 level in our body. Once you have started training your breath hold with your AIDA Instructor, you will experience that the signs of rising CO2 are not an absolute imperative to resume breathing as quickly as possible. You will learn that rising CO2 in your blood is a sign that can be interpreted but not necessarily needs you to resume breathing automatically. ',
          image: '',
          title: 'Triggered by CO2 not O2',
          videoLink: '',
        },
        {
          content:
            'Learning more about the role of CO2 in our body leads us to an important conclusion: Our breathing is regulated mainly by CO2 and to a smaller extent by Oxygen. To some degree our body has means to detect the current level of Oxygen, however in recreational freediving we make use of the signals occurring due to a rising CO2level. Experienced recreational freedivers end a breath hold long before suffering from low Oxygen levels by “reading” the signals of rising CO2 and draw correct conclusions from that.',
          image: '',
          title: 'Triggered by CO2 not O2-continued',
          videoLink: '',
        },
        {
          content:
            'Breathing is a habit. Your body is well trained to maintain its neutral level of CO2 and to react on the slightest change of blood acidity by altering the breathing volume. In a breath hold, you still register these changes of blood acidity, but choose not to react to them immediately. The physical reaction on rising CO2 might be a burning sensation, or tightness in your chest or throat. This can be due to muscular tension that you build up during the breath hold, but it can also be a messenger of an upcoming contraction. After some breath hold time, the level of Carbon Dioxide in your blood will be high enough that the body tries to exhale it by contracting and releasing muscles related to breathing. These contractions do not mean that you need to breathe right now. As already mentioned, they are mere information. Contractions are a very individual experience. Some freedivers describe them as relaxing and easy to handle, while others say that they are so strong that they hardly can keep the air in their lungs. For some, the contractions appear as far apart as 30 seconds, while others get rocked by pulsating, almost continuous patterns of contractions. ',
          image: 'physicalaspectscontractions.png',
          title: 'Physical aspects: Contractions',
          videoLink: '',
        },
        {
          content:
            'No matter how your personal experience of contractions is, the most productive reaction to it is to relax. The less tension you allow to build up in your body, the easier the contractions will pass by. Even though CO2 in very high doses works as a narcotic, the levels as we experience them in recreational freediving do not harm our bodies. Besides a raised breathing volume and contractions, another symptom of elevated CO2 can be headache. While this is certainly not a comfortable experience, there is no indication so far that this is dangerous. The headache will disappear after regaining normal breathing',
          image: '',
          title: 'Physical aspects: Contractions-continued',
          videoLink: '',
        },
        {
          content:
            'As much as the duration of a breath hold is limited by physical aspects it is also a mental challenge.The less we think, the less cerebral activity occurs leading to less Oxygen used and less CO2 produced. The ultimate state of mind for a breath hold is to allow it to go blank. Unfortunately our mind is not very good at doing nothing. The goal in a breath hold is to keep the mind from unneeded tasks; mainly from worrying. After all, you know that everything is alright. You did not get any contractions yet and you have been to this length of a breath hold already many times before. So your task is to convince yourself that you are ok and that you can go on with your breath hold. ',
          image: '',
          title: 'Mental aspects',
          videoLink: '',
        },
        {
          content:
            'Focus on the one important thing: Relaxation. Continue with your relaxation exercise while holding your breath (see “relaxation phase”). Applying relaxation exercises gives your mind a task to perform and it will easily be possible to detect physical tension built up during the breath hold. Let go of it and enjoy your breath hold for a few more moments. When your mind goes wandering again, bring it gently back to the one task at hand – relax and reward yourself with a little smile for staying in control.',
          image: '',
          title: 'Tip',
          videoLink: '',
        },
        {
          content:
            'Some freedivers say that breath holding is “meditation with feedback” or also “meditation without cheating”. There is a certain true aspect in these statements. If your mind keeps spinning and you cannot hold it back from losing focus or even worse, worrying, you are literally “losing your mind”. You are more likely to end your breath hold quite quickly.',
          image: '',
          title: 'Mental aspects-continued',
          videoLink: '',
        },
        {
          content:
            'Experienced freedivers use their contractions as a timer. Counting contractions gives them an indicator of how far they have already gone into their breath hold. For example, if a freediver ended his last breath hold after four contractions to resume breathing without any problems, then it is a safe assumption for him/her that he/she can go to one or two contractions more in his next breath hold without jeopardizing his or her Oxygen levels.You can think of it as driving an old car: You cannot see how much gasoline you still have in the tank (Oxygen), but you can deduct from what the needle on the fuel gauge says (CO2) how much there must be left. The more often you drive that car, the more precisely you know how to interpret the readings on the gauge. Every breath hold leaves another mark on your CO2 gauge; marks that give you confidence to end your breath hold well in time.',
          image: 'O2gasintank.png',
          title: 'O2 = Gas in the tank, CO2 = Gauge in the cockpit',
          videoLink: '',
        },
        {
          content:
            'Simply defined, hyperventilation is in- and exhaling more air than you need to maintain a neutral level of CO2 in your blood.Of course this definition depends greatly on your current state of activity. In a relaxation exercise while lying on your bed you are barely producing CO2, whereas in a 400m sprint you produce such big amounts that your breathing cannot catch up with exhaling enough of it. In the first case any audible breath would already considered to be hyperventilation, while it is not possible to hyperventilate during the 400m run',
          image: 'hyperventilation.png',
          title: 'Hyperventilation',
          videoLink: '',
        },
        {
          content:
            'With an Oximeter the Oxygen saturation of your blood can be measured by attaching it to your finger. At at any given time your blood is saturated with Oxygen levels at around 96-99%. If you are significantly below that reading you are either exerted and need to rest or you are sick and should consult a doctor.You can prove to not be able to increase the readings by hyperventilating with the Oximeter still on your finger. The reading remains more or less steady. You cannot put more tea in a cup that is already full. Sometimes the blood saturation with Oxygen might increase by one percent, but at a great cost: You have to literally over-exert yourself with breathing! After all, hyperventilation does not store more Oxygen in your blood! ',
          image: '',
          title: 'No additional O2 storage',
          videoLink: '',
        },
        {
          content:
            'In the breath hold exercise mentioned earlier it was not possible to do extend the breath hold indefinitely because of the rising level of CO2. But by hyperventilating before the experiment it is possible that you pass out from low Oxygen levels without even feeling the first signal of rising CO2. Hyperventilation can postpone the signals of rising CO2 to such an extent! Hyperventilation does not store more Oxygen, it actually lowers the level of CO2. If you pass out while your face is submerged, you will not unconsciously inhale water, but simply die after a few minutes. Only a buddy watching over you at all times and performing a timely rescue if needed will save you from this ill fate. This is the main reason why hyperventilating before freediving is so dangerous. Apart from the potentially fatal danger, hyperventilation has other disadvantages for breath holding. Hyperventilation raises the heart rate, which goes against the goal of starting a breath hold in the most relaxed state as possible. Hyperventilation also reduces the blood flow to the brain while increasing it towards the extremities. Once you have started your breath hold, your body will need to reverse this process to conserve Oxygen (see the chapter about the “Mammalian Dive Response” in AIDA4). In short, in a breath hold after hyperventilation, your body will not conserve Oxygen as much as it potentially could and is thus using up its Oxygen reserves faster. You can black out earlier than you would have in a completely relaxed state.',
          image: '',
          title: 'Negative effects of hyperventilation',
          videoLink: '',
        },
        {
          content:
            'It is thus important to know and carefully watch out for the symptoms of hyperventilation. If you experience any of these symptoms, do not dive and resume your relaxation exercise until they go away. It is also quite easy to point out if your buddy is hyperventilating by listening to his breathing sound. If you can clearly hear the breathing of a freediver at the tip of his or her snorkel, remind your buddy to relax and extend the relaxation phase until the sound disappears',
          image: 'symptomshyperventilation.png',
          title: 'Symptoms of hyperventilation',
          videoLink: '',
        },
        {
          content:
            'There are ways of prolonging breath holds without compromising your safety.',
          image: 'safelyprolongdives.png',
          title: 'Safely Prolong Dives',
          videoLink: '',
        },
        {
          content:
            'The more often you hold your breath, the more used you will get to rising CO2 levels, mentally as much as physically. The more tolerant to CO2 you get, the longer you can hold your breath. This is where your CO2 tolerance training starts.You will still notice rising CO2, but you will learn to apply a new interpretation. Rising CO2 becomes mere information about the status of your breath hold and it gradually loses the imperative to breathe immediately.Specific CO2 tolerance training will be a topic in your AIDA3 Course.',
          image: '',
          title: 'CO2 tolerance',
          videoLink: '',
        },
        {
          content:
            'Relaxation technique is a major key to modern freediving. Relaxation is a skill that can be learned and needs to be trained. The better you become at it, the more effective it will become. In the beginning it might take a bit of patience to find relaxation, but after a few dozen times of applying a given relaxation technique you will be able to “switch off” almost instantly. The better you get at relaxing, the less Oxygen you will use and the less CO2 you will produce. This allows for increasingly longer breath holds.It takes training, it takes time, but results will come and you will always be safe.Once you start moving under water, the goal is to do this with as little effort as possible. Efficiency in movements is less a question of specialized gear but one of perfect technique.',
          image: '',
          title: 'Relaxation & Efficiency',
          videoLink: '',
        },
      ],
      title: 'BASIC PHYSIOLOGY OF FREEDIVING',
    },
    {
      completed: false,
      innerModules: [
        {
          content:
            'If you tried to reach the bottom of a swimming pool without equalisation, you would feel discomfort or even pain in your ears and forehead. What you would feel is the build up of pressure. It can hurt your ears very quickly, even only one meter deep, so it is not advised to actually try this.This chapter explains the basic mechanisms that are at work here and you will learn how to equalise in order to avoid discomfort, pain or potential harm due to the buildup of pressure',
          image: '',
          title: 'Introduction',
          videoLink: '',
        },
        {
          content:
            "At the surface we have an atmospheric pressure of roughly 1 bar. For every ten metres we go under water, 1 bar adds to that. So at ten meters, the pressure has already doubled to 2 bar, at twenty meters the environmental pressure rises to 3 bar and so on. This is what Boyle's law expresses:'If the temperature remains constant, the volume of a gas is inversely proportional to the absolute pressure'. Boyle's Law",
          image: 'buildsupwithdepth.png',
          title: 'Pressure: Builds up with depth',
          videoLink: '',
        },
        {
          content:
            'Your eardrums are very sensitive to pressure changes as they start to bulge inwards as soon as you start to descent. There is a difference between the sensation of pressure and pain – whenever you sense pressure, then you equalise. Never descend in a way that this sensation of pressure gets painful, as it would mean that you have stretched your eardrums beyond their capacity and potentially damaged them',
          image: '',
          title: 'Sensing pressure, but not pain',
          videoLink: '',
        },
        {
          content:
            'There are four air spaces you need to consider when freediving: Ears, sinuses, lungs and the mask. As you descend, the increasing pressure compresses the air in those spaces. Apart from the lungs these air spaces are rigid containers, they cannot give in like the balloon in the example of Boyle’s law, thus, we have to move more air into them to balance the rising water pressure. This is equalising.On your way back up to the surface, there is no need to equalise anymore. The now dropping pressure will allow the air to leave your ears, sinuses and mask automatically. At this point it should be mentioned that in contrast to scuba diving there is no speed limit in recreational freediving other than your capability of equalising – you can dive to depth and surface at your own speed.',
          image: 'earsinusmask.png',
          title: 'Air Spaces: Ears-Sinuses-Mask',
          videoLink: '',
        },
        {
          content:
            'Lungs are as well air spaces, but they react more like the balloon depicted to explain Boyle’s law: They get smaller the higher the environmental pressure rises and thus equalise themselves. If you are relaxed and do not create any tension to resist, you will not even notice it until freediving to greater depths.However, the lungs must be considered when freediving. If you are very tense, or force an equalisation, or have strong contractions at depth, they can get damaged. This is one of the most important reasons why freedivers of all levels must slowly progress over time, diving to deeper levels, dive by dive.',
          image: '',
          title: 'Lungs',
          videoLink: '',
        },
        {
          content:
            'There are several techniques to equalise the rising environmental pressure while we descend in water. The easiest one is equalizing the mask: Gently exhale through your nose into your mask. Make sure that you only allow enough air into the mask to equalise it, but that no air escapes from your mask as you equalise. After all, you want to keep as much air in your lungs as possible.There are two techniques for equalising the middle ears and sinuses: The Valsalva and the Frenzel manoeuvre. Sinuses equalise together with the (middle) ears, as both are connected with each other.It is important that you decide which technique works best for you and then apply it as relaxed and precisely as you can. Note that equalisation gets easier the more often you do it.',
          image: 'earequalisation.png',
          title: 'Equalisation Technique',
          videoLink: '',
        },
        {
          content:
            'If you already know how to equalise but are unsure which technique you are actually applying, you can check it yourself: Pinch your nose and equalise, maybe several times in a row. Now figure out where the pressure to equalNo matter which technique you use, make sure that the respective muscle group is the only active one. Mixing the techniques and thus creating pressure with your belly/chest and your tongue simultaneously will create opposing forces, which ultimately keeps you from equalizing successfullyise comes from, or in other words, which one is the active muscle in your body',
          image: 'equalisationscont.png',
          title: 'Equalisation Technique-Continued',
          videoLink: '',
        },
        {
          content:
            'With the mouth closed and the nose pinched, you exhale through your nose. As the air cannot escape out of your nose, it will automatically be moved through your Eustachian tubes into your middle ears. Your ears will make a “popping” noise – this is an equalisation.This technique is very popular with scuba divers, as air supply is not an issue. As you will progress as a freediver you will prefer to use the more efficient Frenzel technique.',
          image: 'valsalva.png',
          title: 'Valsalva manoeuvre',
          videoLink: '',
        },
        {
          content:
            'In broad strokes, the Frenzel technique works like this: Pinch your nostrils, then place your tongue at the roof and back of your mouth and move the back of your tongue gently upward as when starting to swallow. This moves the air up into your middle ear as well, resulting in the same popping sound in your ears.If you can equalise your ears without any abdominal or thoracic movements, then you are doing Frenzel.',
          image: 'frenzel.png',
          title: 'Frenzel technique',
          videoLink: '',
        },
        {
          content:
            'During your equalisation exercises, make sure that your head and neck are completely relaxed. You can slightly tilt your head forward to ease relaxation and equalisations. Most importantly, use only the muscles that should be active in your chosen technique. All other muscles need to stay relaxed during the whole equalisation manoeuvre.The more often you train your equalisation, the easier it gets. Equalise 500 times a day, while sitting on the bus, reading a book or walking home from work.',
          image: '',
          title: 'Practice equalisation',
          videoLink: '',
        },
        {
          content:
            'There are many other equalisation techniques, most famously the “hands free” technique, also called BTV (Béance Tubaire Volontaire, French for Voluntary Tubal Opening, VTO). This advanced technique can also be learned, but is not part of the AIDA Education System.',
          image: '',
          title: 'Other techniques',
          videoLink: '',
        },
        {
          content:
            'Equalisation should be easy! When you are sick and congested, then equalisation will be more difficult or slow. In the worst case, simply no air will flow through the Eustachian tubes to your middle ear and/or into your sinuses. Wait a few days until the congestion is gone and resume practicing. Any equalisation technique works best when you stay completely relaxed while equalizing. Pulling faces, or rising shoulders are a signal of too much activity in places of your body where there should not be any. ',
          image: '',
          title: 'Facilitate Equalisation: Clean Technique',
          videoLink: '',
        },
        {
          content:
            'Make sure that you outer ear is filled with water while diving. Any air trapped between your eardrum and a hood can make equalisation hard or even impossible',
          image: '',
          title: 'Outer ear filled with water',
          videoLink: '',
        },
        {
          content:
            'Equalise when you feel the rising pressure but never wait until the pressure becomes painful to your ears.',
          image: '',
          title: 'Equalise frequently enough',
          videoLink: '',
        },
        {
          content:
            'Slow down your descent if necessary. It is ok to hold on to the diving line to slow down or stop your descent. Wait, relax for a moment, equalise and then resume your descent. Do not resume your descent if you cannot equalise.',
          image: '',
          title: 'Slow down',
          videoLink: '',
        },
        {
          content:
            'If you are sick and/or congested, wait until your airways are clear before going back to water. As soon as your equalisation works effortlessly again on dry land, it will also work in water',
          image: '',
          title: 'Dive healthy',
          videoLink: '',
        },
        {
          content:
            'Decongestant medication works for a few days during which you will feel ok to dive. However, after that time the medication stops working and you will feel sick again, taking you much longer to restore your health.',
          image: '',
          title: 'Avoid decongestant medication',
          videoLink: '',
        },
        {
          content:
            'You can stretch your neck and jaw muscles before your dive session. Your AIDAInstructor will guide you through a gentle stretching exercise for doing so. Keep this relaxation of your mind and body while you freedive. The more relaxed you are, the easier equalisation becomes for you.',
          image: '',
          title: 'Stretching before divin',
          videoLink: '',
        },
      ],
      title: 'EQUALISATION',
    },
    {
      completed: false,
      innerModules: [
        {
          content:
            "The key to successful freediving is the optimization of O2 consumption. The way to achieve this is learning and applying a good freediving technique. The better the technique, the easier the dive becomes. Hence, the “numbers in freediving” such as meters, minutes and seconds are more a result of good technique, and less that of physical performance.When it comes to extreme freediving, such as in competitions and record attempts, physical and mental performance undoubtedly become important factors as well. Recreational freediving however is about good technique.The mental part of freediving is fairly simple: You need to focus only on the skill or technique at hand, and maybe prepare for the next one. E.g. during the relaxation phase you focus on your relaxation technique while keeping the mind from wandering. It is simple, but not always easy. Especially when your mind is restless and if it is 'one of those days'. Just be patient, take your time and allow the mind to settle. You cannot force your mind to rest, but you can provide the space",
          image: 'freedivetechnique.png',
          title: 'Importance of technique',
          videoLink: '',
        },
        {
          content:
            'After the relaxation phase and the one full breath, the duck dive is the next skill of a freedive. It enables you to start a dive and move underwater in the most efficient way. A strong duck dive can get your head as deep as five meters, before you even start using your fins. This is a depth where you would usually have to equalise your ears to not experience pain in your eardrums. But as your hands are busy during the duck dive, you cannot equalise without compromising the technique. The solution is to equalise once before you do your duck dive. In fact it means to over pressurise your ears to give yourself more time until you are able to perform the first equalisation under water.',
          image: 'fullsequencefreedive',
          title: 'Duck dive',
          videoLink: '',
        },
        {
          content:
            'After taking your one full breath, removing the snorkel from your mouth and optionally equalising (over pressurising) you are ready to start your duck dive. The sequence of a duck dive is above',
          image: 'duckdivesequence',
          title: 'Duck dive sequence',
          videoLink: '',
        },
        {
          content:
            '1. Stretch yourself out on the water surface – from your fingertips to the tips of your toes to make yourself as long as you can. Make sure that your head stays in body axis, which means you are looking vertically down into the water and your arms are stretched out behind your ears',
          image: '',
          title: 'Part 1',
          videoLink: '',
        },
        {
          content:
            '2. Bring your upper body to a right angle with the surface, bending at the waist in a dynamic, strong move, while keeping your arms stretched out behind your ears. Keep your lower body and legs straight',
          image: '',
          title: 'Part 2',
          videoLink: '',
        },
        {
          content:
            '3. Pull your extended arms down towards your legs, using a breaststroke movement that ends on the outside of your thighs. This will make your legs sink below the surface. Once your fins sink below the surface you can start fining.After the arm pull you should start equalising immediately.Stick to that sequence. If you skip one step, your duck dive will be less efficient or might not work at all.',
          image: 'duckdive.png',
          title: 'Part 3',
          videoLink: '',
        },
        {
          content:
            'The more elegantly you execute a duck dive, the more efficient it will be. Pay special attention to your head position. It should stay in axis with your body at any given time. Before the duck dive you look straight down into the blue (and not to your fingers), and after the duck dive you look horizontally to the diving rope. This is a major difference to scuba diving where you usually look in the direction where you are going. In freediving, you know where you are going: Downwards along the rope and there is no need to look.',
          image: '',
          title: 'Elegance is efficient',
          videoLink: '',
        },
        {
          content:
            'There are many ways of doing a duck dive. You can do it with an arm stroke or without it, with one or both leg(s) actively lifted in the air, etc. These techniques haveall their advantages and, given they are executed well, do all work. The discussed technique with “full arm pull” works great to start a constant weight (CWT) dive with bi-fins. You will have to modify the technique for other disciplines like diving with a mono fin or without fins.',
          image: '',
          title: 'Many possible techniques',
          videoLink: '',
        },
        {
          content:
            'Swimming with fins is using muscles that are not very active in our every day landbound lives, which is the main reason why finning might feel a bit awkward in the beginning. A good finning technique starts from the hips and uses the hip flexor to move the leg forward and the buttocks to move the leg backwards. Most other leg muscles are used to propagate that action towards the fin by keeping the leg and foot as extended as possible. It is quite normal that the hip flexor is not flexible or strong enough to allow for a good finning technique right from the beginning. In order to develop strength and flexibility it is recommended to start with pool training in the discipline of dynamic apnea.',
          image: 'finningtechnique.png',
          title: 'Finning technique: Action starts from the hips',
          videoLink: '',
        },
        {
          content:
            'Knees and ankles stay as straight a possible throughout the whole range of the finning movement. This makes finning a somewhat “stiff” experience in the beginning. However, in order to avoid a “bicycle style” kick remember to always keep your knees and ankles straight.',
          image: '',
          title: 'Legs straight to the point of the toes',
          videoLink: '',
        },
        {
          content:
            'How wide and how fast you kick depends on several factors like the length and strength of your legs, the length and stiffness of your fins and the level of your technique. In general you should apply a strong, steady and symmetrical kick with a continuous rhythm.',
          image: '',
          title: 'Wide, strong and steady kick',
          videoLink: '',
        },
        {
          content:
            'During your descent the goal is to get to depth with minimum effort and ensure easy equalisation. In this phase of the dive the focus rests on two things: Streamlining and good finning technique.Keep your body straight from the crown of your head to your tiptoes while working your fins from your hips with straight legs. One hand rests on the side of the thighs, while the other is pinching the nose to equalise when needed. In the beginning this might feel a bit awkward, but after a few repetitions you will find out how comfortable this body position actually is. If your finning technique is symmetrical, or “even”, then there is no need to use your hands as flaps to control any wiggling, or rotation along your body axis. Dynamic apnea (see Chapter 9) is a very efficient form of training for this phase of a freedive.',
          image: '',
          title: 'Minimum effort',
          videoLink: '',
        },
        {
          content:
            'It is important that you equalise before feeling any discomfort in your ears or mask. However, a sensation of pressure (your eardrums slightly bulging inwards) is different from experiencing pain. Equalise when you can feel the pressure and always before it hurts.Most people will have to pinch their nose with one hand in order to equalise, while the other hand stays on the side of the thigh. Keep the elbow of the pinching hand close to your chest to produce only minimal water drag',
          image: '',
          title: 'Equalise frequently',
          videoLink: '',
        },
        {
          content:
            'The relaxation you found at the surface ideally stays with you throughout the whole dive. Think of the descent as a “static breath hold” plus “finning” and “equalizing”. Your body stays relaxed and your mind is completely focus on the moment.',
          image: '',
          title: 'Stay relaxed',
          videoLink: '',
        },
        {
          content:
            'The turn allows you to stop your descent and start your ascent with minimum effort.',
          image: '',
          title: 'The Turn',
          videoLink: '',
        },
        {
          content:
            'Near the end of the descent, extend your arm – the one with the lanyard, if you wear one – towards the dive line and let your hand slide along it.',
          image: '',
          title: 'Extend one arm',
          videoLink: '',
        },
        {
          content:
            'When you want to stop your descent, grab the dive line with your hand. This will induce the turn.',
          image: '',
          title: 'Grab to stop',
          videoLink: '',
        },
        {
          content:
            'Ideally you will do a forward tumble turn. Avoid doing the “skydiver turn” as arching your back at depth can lead to injuries. Tip: Grab the rope with your thumb pointing to the sky. This allows you to do a full forward tumble turn without twisting your arm or changing your grab. Try for yourself a few times at a depth of around 5m to find out how this works.',
          image: '',
          title: 'Forward tumble turn',
          videoLink: '',
        },
        {
          content:
            'The end position of the turn is one hand still on the rope and the rest of the body hanging downwards from it. Start your ascent now by pulling on the dive line once. Then let go of the dive line and start finning again.',
          image: 'theturn.png',
          title: 'Pull the line to start ascent',
          videoLink: '',
        },
        {
          content:
            'The ascent looks the same like the descent minus the need for equalisation.Focus: Finning technique & streamliningGood finning technique and streamlining are again key to minimize your energy consumption. It is of special importance to keep the head in body axis at all time. Tilting the head back to look up creates a great amount of water resistance and thus reduces streamlining considerably.',
          image: '',
          title: 'The Ascent: Resembles the descent',
          videoLink: '',
        },
        {
          content:
            "Once you have started to ascend you should go all the way back to the surface. Especially after an aborted attempt you might be tempted to stop your ascend and 'give it a second go' to reach your targeted depth. Don’t do this! If you had to turn early, maybe because of a failed equalisation, it is important that you stay focused on finishing the dive in a controlled manner. Keep on ascending! There will be more dives, and if not today then maybe tomorrow you will reach your goal",
          image: '',
          title: 'No turning',
          videoLink: '',
        },
        {
          content:
            "You might feel quite 'heavy' at the beginning of the ascent. Thus, in the beginning of the ascent your finning must be quite strong. As you are getting closer to the surface the fin-kick can then gradually become less intense. You can feel how buoyancy increases. For the last few meters you can then stop kicking and allow buoyancy to do all the uplifting work for you",
          image: '',
          title: 'Use of buoyancy',
          videoLink: '',
        },
        {
          content:
            'Keep your air in your lungs until you have surfaced. You should not exhale while your head is still under water.',
          image: '',
          title: 'Surface and Recovery: Keep your air',
          videoLink: '',
        },
        {
          content:
            'After you have breached the surface with your head, bring your body under control by holding on to the float or the dive line of the platform. If no floating device is in place you will need to start finning now to keep your head above the water.',
          image: '',
          title: 'Grab the float',
          videoLink: '',
        },
        {
          content:
            'A freedive is only complete once you have taken a minimum of three proper recovery breaths. After you have resumed normal breathing, indicate to your buddy that everything is all right by showing the OK-sign and sharing a big smile.The OK-sign is the thumb and index finger forming a circle, while the other three fingers are kept straight. Note that “thumbs up” in diving has a different meaning, indicating that you or your dive buddy wants to go back to the surface.Finish recovery breathing first before you or your buddy start talking.',
          image: '',
          title: 'Recovery Breathing',
          videoLink: '',
        },
      ],
      title: 'FREEDIVE TECHNIQUE',
    },
    {
      completed: false,
      innerModules: [
        {
          content:
            'Every year we lose dozens, maybe hundreds of snorkelers and spear fishers to the sea. No one knows the exact figures, we even do not know what the victims exactly did, because they broke – knowingly or not – the first and most important rule in freediving:Always freedive with a buddy!The buddy system is the basis of safe freediving.',
          image: 'buddyingsystem.png',
          title: 'The Buddy System',
          videoLink: '',
        },
        {
          content:
            'It is the main goal of the AIDA Education System to create safe freedivers. From the absolute beginner to the deep diving athlete – your reasonable and educated behaviour is the first and most important safety system in freediving. Conservative freedives, correct weighting, correct choice of gear, good freediving technique, finding the best spot for a freedive session or judging the conditions correctly – these are a few of the many skills that make you a competent and thus safe freediver. The AIDA Education System is geared towards your safety: In every AIDA Course you will learn the skills that fit your level of freediving',
          image: '',
          title: 'First level of safety: You!',
          videoLink: '',
        },
        {
          content:
            'Every breath-hold dive has two participants: The freediver and the buddy. There is no exception to this rule, freediver and buddy are two sides of the same medal. Your level of buddying has to be on par with your freedive skills. Every AIDA Course aims at making you a more competent freediver and simultaneously at developing your buddy skills to the same level.',
          image: '',
          title: 'Second Level: The buddy team',
          videoLink: '',
        },
        {
          content:
            'Take your buddying as seriously as your freediving. This approach is the foundation of every efficient buddy team. To do so you always need to know what your buddy wants to do next in order to prepare yourself accordingly. For this it is essential to establish efficient and continuous communication within the buddy team.',
          image: '',
          title: 'Take buddying as seriously as your own dives',
          videoLink: '',
        },
        {
          content:
            'The first talk in a buddy team happens before entering the water. Make a plan about the session ahead. A deep training session with a float and a line will be very different from a fun exploration dive on a shallow reef. Make sure that both members of the buddy team get to attune their plans for the session.After entering the water, keep in touch. Reassure your buddy that you are fine or inform him if something troubles you. Together you might find a way to eliminate the trouble. If you feel that your buddy and you do not connect for any reason or you feel uncomfortable with each other, consider the option of finding another buddy. ',
          image: '',
          title: 'Communication in a buddy team',
          videoLink: '',
        },
        {
          content:
            'Depending on the dive plan, buddying will look very different. In any case it is ideal to bring a float as a safety tool.For a fun freedive on a reef or wreck, “one up, one down” is a good plan: While you dive down to the reef to explore, your buddy will follow you on the surface, pushing the float in front of him. After surfacing at the float and reassuring your buddy that everything is alright, it is his/her turn to dive and yours to follow on the surface.Tell your buddy what you expect him or her to do. Is supervision from the surface for your next shallow dive enough or do you need deep safety for a dive close to your personal best? It is up to you to communicate about your dive as precisely as possible so your buddy can be of best assistance.In a training session with a float and a line you inform your buddy about the objective before every single dive. This includes estimated dive time, depth and if you plan to do a “hang”, which means you plan to stay immobile at depth for a certain time',
          image: '',
          title: 'Forms of buddying',
          videoLink: '',
        },
        {
          content:
            'When doing static freediving in a pool or confined water, your buddy has an additional role as your coach and motivator. Again, it is crucial to communicate and tell your buddy what you expect and how much you want to be talked to. He or she can call out the time for you, talk to you, helping you to forget your worries and relax. He or she can point out tension in the body for you to let go of or simply be silent. All this can be done while taking care of your safety',
          image: 'staticbuddying.png',
          title: 'Static Buddying',
          videoLink: '',
        },
        {
          content: 'The main task for static buddying is to make sure that the diver is ok at any time. You and your buddy will agree on a checking procedure and communication before the first dive. These are possible ways of checking:',
          image: '',
          title: 'Safety check',
          videoLink: '',
        },
        {
          content: 'Ask the diver to raise the index finger of one hand (or agree on any other hand sign). There is no need to move the hand out of the water as the sign can be seen clearly from above the surface.',
          image: '',
          title: 'Verbal',
          videoLink: '',
        },
        {
          content: 'Ask the diver to hold up fingers for simple questions, e.g. 5+3-4=? or "How many children do you have?"',
          image: '',
          title: 'Verbal',
          videoLink: '',
        },
        {
          content: 'Give the diver a little squeeze on the right shoulder, which should be answered by a outstretched index finger of the right hand',
          image: '',
          title: 'Non-Verbal',
          videoLink: '',
        },
        {
          content: 'Agree with your buddy on your own checking procedure if none of the above suits you. As a buddy you will always confirm the actions of the diver. That way you can reassure your diver that you have everything under control and he or she can let go of any worries. Again, the confirmation can be done verbally on non-verbally: Verbal confirmation: “Thank you, I’ve seen that ok sign, you look great, go on!” Non-verbal confirmation: Repeat the agreed check-sign twice, e.g. double-squeeze on the shoulder again. Doubling the agreed signal avoids confusion of checks and confirmations',
          image: 'staticchecks.png',
          title: 'Static Buddying- continued',
          videoLink: '',
        },
        {
          content: 'Answering checks by signalling the “OK-sign” by forming a ring with your index finger and thumb can be confusing because a completely relaxed hand looks already very similar. Thus it can be hard to tell if a freediver is just relaxing or actually forming the OK-sign',
          image: '',
          title: 'Tip',
          videoLink: '',
        },
        {
          content: 'Before starting a session of static freediving, it is important to communicate within the buddy team. Tell each other what you like, do not like and what you expect from your buddy. The more clear you are about your expectations, the easier you make it for your buddy to be of his/her best service to you',
          image: '',
          title: 'Buddy Team Plan',
          videoLink: '',
        },        {
          content: 'Agree on how to do safety checks',
          image: '',
          title: 'Check',
          videoLink: '',
        },        {
          content: 'Even in the calmest pool there are little currents from the water jets. One of the tasks of your buddy is to keep you in place, with your head about one hand span away from the edge of the pool. Tell your buddy how you would like to have this done: Do you like to be firmly touched with one hand between your shoulder blades? Or do you want to be held in position by absolute minimal physical contact, e.g. by holding just the zipper of your wetsuit?',
          image: '',
          title: 'Touch',
          videoLink: '',
        },        {
          content: 'Do you want to be constantly informed about the length of your static - and if yes, in what intervals? If you are doing a target dive to a certain breath hold time it is quite popular to announce the time to go until the defined target',
          image: '',
          title: 'Time',
          videoLink: '',
        },        {
          content: 'Some freedivers like to be constantly talked to during a static breath hold, while others need their total silence. Tell our buddy what you expect!',
          image: '',
          title: 'Talk',
          videoLink: '',
        },        {
          content: 'How will your buddy team go through the session? It is recommended that you keep one role – diver or buddy – for a whole sequence before switching. Announce your sequence of A41 to your buddy, finish your dives and then switch roles',
          image: '',
          title: 'Sequence',
          videoLink: '',
        },
        {
          content: 'Buddying in static freediving can be a demanding task. It is a good idea to bring a pencil and a waterproof board, e.g. a dive slate, to write down the sequence of dives exactly the way your diver expects you to guide him / her though. Always take your buddying as seriously as your own freediving and you will quickly become a popular freediver to have on the team',
          image: 'reliability.png',
          title: 'Reliability',
          videoLink: '',
        },
        {
          content: 'In freediving, trouble usually does not turn up suddenly. A freediver who has stayed down too long will gradually get low on Oxygen and the consequences of this are visible to the observing eye. You as a buddy can anticipate trouble by looking out for the following signs',
          image: '',
          title: 'Signs of a freediver in need of help',
          videoLink: '',
        },
        {
          content: 'When a diver with a usually strong kick all of a sudden becomes sloppy in his/her movements, it should be interpreted as a sign of trouble. A diver that stops kicking on ascent at an inappropriate time or while swimming horizontally without any obvious reason (e.g. watching marine life) should be suspected to be in trouble',
          image: '',
          title: 'Change of finning style',
          videoLink: '',
        },
        {
          content: 'A freediver returning from depth close or beyond his/her personal maximum should always be escorted on the last few meters of his/her ascent. As a safety diver you will stay face to face with the freediver in such a way that you can always see his/her eyes. If these get unfocused – “the lights are on but no one’s home” – and the diver looks right through you, it is a strong indication that the freediver is in trouble',
          image: '',
          title: 'Unfocused Eyes',
          videoLink: '',
        },
        {
          content: 'in an uncontrolled way: An ascending diver who tries to grab the rope in an uncontrolled way may indicate that he or she is in trouble. Note that uncontrolled grabbing of the rope will look different from a diver at depth suffering from leg cramp and thus holding on to the rope to ascent with strong arm pulls. It is an expression of full control, while uncoordinated grabbing at the rope is clearly not.',
          image: '',
          title: 'Grabbing the Rope',
          videoLink: '',
        },
        {
          content: 'at the end of a dive: Towards the end of a dive, your buddy might have accumulated a lot of CO2. The well trained and in-control freediver will slow down at this point in order to avoid wasting any Oxygen and producing excessive amounts of CO2. Speeding up to be able to breathe as soon as possible is unwise and thus a sign of a freediver losing control.',
          image: '',
          title: 'Speeding Up',
          videoLink: '',
        },
        {
          content: 'A freediver never exhales under water. In freediving to depth you still might see a few bubbles around your buddy’s head on ascent. These come from the expanding air and are perfectly normal. But if your buddy clearly exhales, you know that he or she is losing Oxygen and buoyancy and is thus more likely to black out. ',
          image: '',
          title: 'Escaping Air',
          videoLink: '',
        },
        {
          content: '(after surfacing): This is a clear sign that your buddy is in a low Oxygen state. The same is the case your buddy shows uncontrollable twitches and/or reduced responsiveness. All these signs indicate that your buddy needs your immediate support.',
          image: '',
          title: 'Inability to keep the head above water',
          videoLink: '',
        },
        {
          content: 'Pretty quickly you will develop a feeling for what looks like a normal dive and what is a sign of trouble. This is true in general, but especially when looking at your buddy for a few dives in a row. If there is any unexpected change in the way your buddy dives that makes you uncomfortable, you are most likely right to step in and help.',
          image: '',
          title: 'Anything Abnormal',
          videoLink: '',
        },
        {
          content: 'After finishing your first AIDA Freedive Course you will already be well educated about best practice in freediving. If you think you should act – then act! There are still not that many trained freedivers around, so the non-reaction from other people in a certain situation that looks dangerous to you is actually not a reason for you not to step in! Support a snorkeler or freediver if you feel it is needed. Better help one time too many than not.',
          image: 'actshouldact.png',
          title: 'If you think you should act \u2013 act!',
          videoLink: '',
        },
        {
          content: 'Loss of Motor Control, or LMC, is a hypoxic fit that occurs after surfacing if Oxygen levels are too low. A LMC happens only after a dive. It is not the same as a black out, it can be described as the red zone of low Oxygen before falling unconscious',
          image: '',
          title: 'Loss of Motor Control (LMC)',
          videoLink: '',
        },
        {
          content: 'A clear indicator that your buddy suffers from LMC are jerky movements with the limbs or the head. This is why a LMC also often referred to as “Samba”. A light LMC will just last a few seconds and will mainly induce light uncontrolled eye and/or head movements, while severe LMC can affect your whole body and leads to an inability to maintain your airways out of the water',
          image: '',
          title: 'Jerky movements of limbs and head',
          videoLink: '',
        },
        {
          content: 'A LMC may or may not result in a full black out. The cause of a LMC is a lowered level of Oxygen in your blood that has reached the point where normal cell function cannot occur. This means the metabolism is disturbed and normal functioning is reduced, hence the jerky movements and lack of responsiveness.A LMC can result in a full black out or not – this depends largely on correct application of recovery breathing as explained in chapter Error: Reference source not found. When suffering from a LMC you are not able to think straight and your body will do what you trained it for. As already mentioned, make recovery breathing an imperative habit after every breath hold to condition your body to that special technique. In other words, a freedive is not over when you surface, it is over after at least three recovery breaths.After recovery from a LMC, you may not be aware of what just happened. Trust your buddy, he or she will tell you',
          image: '',
          title: 'Last warning signal',
          videoLink: '',
        },
        {
          content: 'As a consequence of a LMC you should stop freediving for the rest of the day.',
          image: '',
          title: 'Stop diving for the day',
          videoLink: '',
        },
        {
          content: 'It is of utmost importance to find out why you suffered from a LMC. There may be many reasons: Hyperventilation, stress, feeling unwell or bad finning technique just to mention a few. Most likely it is even a combination of several of these reasons. If you cannot point out for sure why you suffered from LMC, seek coaching from an AIDA Freedive Instructor. Discuss the dive in detail and provide video footage if available. Together with your buddy, find out what went wrong, learn from your mistakes and change your freediving accordingly.',
          image: '',
          title: 'Find out why it happened',
          videoLink: '',
        },
        {
          content: 'A Black Out or BO is the loss of consciousness caused by lack of Oxygen (O2) towards the end of a breath hold or immediately after.',
          image: '',
          title: 'Blackout (BO): Loss of consciousness',
          videoLink: '',
        },
        {
          content: 'During a dive you may have used up Oxygen until the point where there is not enough left for the body to function normally. At this point your brain enters into a state of “survival mode” and you fall unconscious. The brain gradually shuts down all processes that are not needed for immediate survival.If you push your limits too far, this can happen in a swimming pool during your static or dynamic training, in a dive to depth, or during a dry breath hold. It can happen everywhere and this is why you must always have a trained buddy supervising you when holding your breath in water.',
          image: '',
          title: 'Hypoxia',
          videoLink: '',
        },
        {
          content: 'A black out will not hit you without warning while your holding your breath. You can detect an oncoming blackout by these symptoms:',
          image: '',
          title: 'Symptoms of an oncoming blackout',
          videoLink: '',
        },
        {
          content: 'It can also be a humming or hissing noise. It slowly builds up until it drowns all external sounds',
          image: '',
          title: 'Ear ringing',
          videoLink: '',
        },
        {
          content: 'Some say it feels like someone is covering you with a very warm blanket, starting from the neck and the back of the head it gradually covers your whole body.',
          image: '',
          title: 'Feeling of warmth',
          videoLink: '',
        },
        {
          content: 'A demanding dive will be hardest towards its end. It is thus an indicator to you that your brain is not functioning normally when you all of a sudden feel that the dive becomes easy.',
          image: '',
          title: 'The dive starts to feel easier',
          videoLink: '',
        },
        {
          content: 'The field of vision starts to narrow gradually, until there is only a small point visible right in front of you – or vision might go away entirely',
          image: '',
          title: 'Tunnel vision',
          videoLink: '',
        },
        {
          content: 'This is closely connected to the feeling that the dive becomes easier – your are not thinking straight anymore and have a hard time to stay focused.',
          image: '',
          title: 'Fuzzy thoughts',
          videoLink: '',
        },
        {
          content: 'Some freedivers reported to have a feeling of “ants crawling over my fingers, my arms, and then the whole body”.Surface immediately (in pool dives) or indicate to your buddy (coming up from an open water dive) if you experience any of these symptoms.In recreational freediving you should never come close to being hypoxic. Experiencing any of these symptoms is thus not acceptable practice for a safe freediver',
          image: '',
          title: 'Tingling sensation',
          videoLink: '',
        },
        {
          content: 'There is absolutely no benefit in blacking out. This must be clearly stated to oppose certain believes that training “to the edge” creates the greatest results. It does not.To hold your breath to significantly lowered Oxygen saturation is probably associated with a mildly increased cell death well before blacking out. In every situation that affects our brain negatively (like heading a football, being drunk or even sneezing), the significance of the damage is a question of dosage. Repeatedly experienced black outs will certainly have negative consequences and should thus be avoided.After recovery from a black out, a freediver may not be aware of what just happened and at times acts erratically. It is very important to supervise a freediver recovering from a black out until you as a helping buddy have the clear impression that the victim has regained full control over his/her mind and body.',
          image: '',
          title: 'Brain damage?',
          videoLink: '',
        },
        {
          content: 'After suffering from a black out, a freediver should stop diving for the rest of the day to allow the body to fully recover from the incident. ',
          image: '',
          title: 'Stop diving for the day',
          videoLink: '',
        },
        {
          content: 'As after a LMC, it is very important to find out the reason(s) why you suffered from a black out. Seek coaching from an AIDA Instructor if you cannot clearly point out what went wrong. Once you found the reason, change your freediving behaviour accordingly in order to avoid the same incident to happen again.',
          image: '',
          title: 'Find out why it happened',
          videoLink: '',
        },
        {
          content: 'If your buddy suffers from Loss of Motor Control (LMC): • Gently hold the freediver so his/her airways are out of the water • Remove facial equipment if needed • Reassure and coach him through his/her recovery breathing • Remind him to stop diving for the rest of the day • Check for any injuries as a result of the LMCThe jerky movements of a “Samba” can lead to serious injuries e.g. when hitting the edge of the pool with the teeth, nose or any other part of the body. This is why you as a buddy will have to be very close to the surfacing freediver, ready to move one of your arms as a bumper between the freediver and the pools edge',
          image: 'rescueafreediver.png',
          title: 'Rescue a Freediver: Support in LMC',
          videoLink: '',
        },
        {
          content: 'If your buddy suffers from a black out (BO), you will act SAFE: Slower is faster, do every step correctly without haste, then follow up with....',
          image: 'safeacronym.png',
          title: 'Rescue of a blackout: The SAFE-rule',
          videoLink: '',
        },
        {
          content: 'This is how to approach the SAFE rule and the Blow – Tap – Talk cycle...',
          image: 'Blowtaptalk.png',
          title: 'Blow-Tap-Talk',
          videoLink: '',
        },        {
          content: 'Approach the unconscious diver from behind. Your right arm slides under his/her right arm to his/her face. Shut his/her mouth with your palm and secure his/her mask with your fingers. The left hand holds the back of his/her head. Keep the head straight in line with the body axis – no tilting back or forth. You should also rehearse to apply this grip with swapped hands and put the left hand to the face and the right hand to the back of the victims head. In a real situation you will use the one that is more available to you, depending on your relative position to the victim.After establishing this grip, get yourself in a position where you can use your fins: In a pool, roll yourself off the victim until your heels touch the bottom of the pool. Then you can push off and start the ascent towards the closest edge of the pool or any floating device. In open water, make the victim “look over your shoulder” first and then you twist away your whole body until the outside of your hip is in touch with the victim. In this position your fins are clear for kicking. Additionally you can lift the victim away from you by simply straightening your arms. Now ascend and bring the victim to the surface.End your ascent whenever possible next to a floating device to support the next steps. If you are using a flat-topped freedive float you can use the speed of the ascent to fly the victim’s torso onto the float, on his/her or her back.',
          image: '',
          title: 'Surface',
          videoLink: '',
        },
        {
          content: 'Once the airways (nose and mouth) are above the water line, they have to stay there. Use the buoyancy of the victim’s body and wetsuit and drop all weights from the victim and yourself if you have not done so already before',
          image: '',
          title: 'Airways',
          videoLink: '',
        },
        {
          content: 'Remove all Facial Equipment (mask, fluid goggles or nose clip) now. The skin around the airways is very sensitive to humidity. Once dry, this area of the skin will signal the unconscious body that there is air to breathe. This process is most effective in connection with air movement with all facial gear removed that could restrict the contact of the face with air',
          image: '',
          title: 'Facial Equipment',
          videoLink: '',
        },
        {
          content: 'Blow on the skin below the eyes to dry the skin and signal thus to the unconscious body that there is now air to breathe. Tap alternatively both cheeks of the unconscious freediver with your open hand. This is not a hard slap, but should still be executed with enough strength. Talk to the still sub-consciously active mind of the victim: Tell him to breathe in and use the first name of the victim. For example “Peter, breathe in!” in a very directive tone',
          image: '',
          title: 'Blow Tap Talk (BTT-Cycle)',
          videoLink: '',
        },
        {
          content: 'Repeat the BTT-Cycle.If the victim does not resume breathing within 15 seconds or earlier, give up to five rescue breaths with the victims nose pinched and the head tilted back to open the airways.AIDA advises you to consider attending a first aid course. This is also a prerequisite for the AIDA4 Advance Freediver Course.',
          image: 'rescuesteps.png',
          title: 'BTT-Cycle',
          videoLink: '',
        },
        {
          content: 'Although practicing the rescue techniques with your instructor will make you a reliable and confident buddy, it does not qualify you as a certified rescuer or emergency first responder. AIDA strongly recommends that you follow a complete first aid course as conducted by many specialised agencies. This will be particularly useful if you intend to continue your AIDA Education.Note that your instructor, as a fully qualified professional rescuer, has to update his/her rescue training every two years and must regularly practice these safety skills',
          image: 'btt.png',
          title: 'Remember',
          videoLink: '',
        },
        {
          content: 'As a safe freediver, LMC and BO are unacceptable outcomes for your dives. Your main goal is to reduce all circumstances that lead to ending a dive in a hypoxic state to an absolute minimum by applying best practice of freediving as follows',
          image: '',
          title: 'Risk Reduction',
          videoLink: '',
        },
        {
          content: 'Mental and physical relaxation means to preserve your energy. Especially in the last phase before a dive, relaxation is the most important task at hand, hence it is called relaxation phase. The more relaxed you are, the safer and more enjoyable freediving becomes',
          image: '',
          title: 'Relaxation',
          videoLink: '',
        },
        {
          content: 'Never push your limits. There is a simple check for you: If you feel stressed or sense a rising feeling of panic, then you are exceeding your limits already. In this situation you should not dive. If already under water, abort your attempt and go back to your relaxation exercise until you feel ready, or change the goal of your dive.',
          image: '',
          title: 'Conservative Freediving',
          videoLink: '',
        },
        {
          content: 'The safe way to achieve great freedives is by focusing on moving gracefully and relaxed, not by pushing. Application of good freediving technique as you learn it in every AIDA Freedive Course is key to the reduction of effort to move under water, and thus enhances your safety.',
          image: '',
          title: 'Apply Good Technique',
          videoLink: '',
        },
        {
          content: 'Always perform recovery breathing. Make it a habit that a dive is not over after surfacing, but after finishing at least three correct recovery breaths. This way you train your body to do it automatically in case of an emergency (e.g. in a hypoxic state).',
          image: '',
          title: 'Recovery Breathing',
          videoLink: '',
        },
        {
          content: 'Stay well hydrated. Being physically active while swimming wrapped in a wetsuit makes us sweat. Also through “immersion diuresis” (effects of pressure changes on the kidneys – see AIDA3 Freediver Course) we lose a certain amount of liquid while freediving. In a tropical environment, the heat from the sun combined with the high water temperature may constitute another cause of fluid loss. Increased breathing rates also add to dehydration. The amount of fluids required is easily underestimated and thus re-hydration while or after freediving is important. Always bring a re-usable water bottle to your session and also have drinking water / electrolytes ready to start drinking immediately after the session. You need to drink even if you are not thirsty. This also means having drinking water available on boats is essential.',
          image: '',
          title: 'Hydration',
          videoLink: '',
        },
        {
          content: 'There is simply no excuse to omit the first rule of freediving: Always freedive with a buddy. If there is no buddy available it means no freediving for you. Being under water without a buddy is not freediving, it is being irresponsible. Sadly, even very experienced freedivers have ignored this basic rule at the highest possible cost. This clearly demonstrates that being aware of the risk does not minimise it. Only acting to minimise risks by having a buddy will increase your safety',
          image: '',
          title: 'Always freedive with a trained buddy',
          videoLink: '',
        },
        {
          content: 'By correctly weighting yourself, you save energy while freediving and buddying. Also, you will not be “over weighted” in a case of emergency',
          image: 'correctweighting',
          title: 'Correct Weighting',
          videoLink: '',
        },
        {
          content: 'Take the snorkel out of your mouth before you descend. This is probably the easiest difference to spot between a trained freediver and an untrained snorkeler who takes a casual breath-hold dive. In case of a black out the snorkel is an open water pipe to the victim’s airways, making an effective rescue much more challenging and complex.',
          image: '',
          title: 'Snorkel out',
          videoLink: '',
        },
        {
          content: 'You will learn and repeat rescue technique in every AIDA Course. As your level as a freediver increases, so will your level as a buddy and freedive rescuer. You will be able to perform rescues from greater depths, while the rescue technique itself stays the same.',
          image: '',
          title: 'Rescue technique practice',
          videoLink: '',
        },
        {
          content: 'Grab hold of something as soon as you reach the surface. If no freedive buoy is available, two life vests wrapped together or a lifebuoy from the boat can be used. While a float is of course essential in an open water training session, it is also very practical and a great safety device in a fun freedive session e.g. on a reef. It can carry snacks or a water bottle, as well as being visible to boats and providing a resting surface. Apply the rule of “one diver down, one up”!',
          image: '',
          title: 'Bring a Float',
          videoLink: '',
        },{
          content: 'Use a lanyard for dives deeper than 20 meters or when freediving in visibility less than 10 meters. Here is another rule of thumb: Use a lanyard when diving out of sight of your buddy.',
          image: '',
          title: 'Lanyard',
          videoLink: '',
        },
        {
          content: 'Allow enough time between scuba diving and freediving. After diving with compressed air (scuba), the body has accumulated a certain amount of Nitrogen. When directly moving over to freediving, the quick pressure changes of freedives can then lead this gas to cause decompression sickness (DCS)',
          image: '',
          title: 'Freediving and Scuba',
          videoLink: '',
        },
        {
          content: 'If you are using a dive computer, wait until it clears you to fly before freediving.',
          image: '',
          title: 'No Fly Sign',
          videoLink: '',
        },
        {
          content: 'If you do not use a dive computer, these two rules of thumb will give you a conservative estimation how much time you need to allow before flying or freediving:',
          image: 'freedivingafterscubadiving.png',
          title: 'Freediving after SCUBA diving',
          videoLink: '',
        },
        {
          content: 'The amount of Nitrogen you accumulate while recreational freediving is quite small, but existing. If you are going to scuba dive after freediving, your dive computer has no information about this residual Nitrogen in your system and might give you readings that are not conservative enough to be absolutely safe.At the moment there are no conclusive studies on how much time is safe to allow for scuba diving after freediving. However, the scientific community recommends a minimum of 12 hours if you want to scuba dive after freediving',
          image: '',
          title: 'Scuba diving after freediving',
          videoLink: '',
        },
        {
          content: 'When freediving do not accept air from a scuba diver underwater. Despite it being a popular diver joke to offer you the “octopus” to take a breath: Say “No t(h)anks”. The first breath of compressed air entering your lungs underwater switches your diving mode from freediving to scuba diving and you consequently have to end your dive as a scuba diver. If your mind cannot follow that switch, you put yourself in great danger',
          image: '',
          title: 'Do not accept air from a scuba diver',
          videoLink: '',
        },
      ],
      title: 'SAFETY IN FREEDIVING',
    },
    {
      completed: false,
      innerModules: [
        {
          content: 'To start freediving you need a mask, a snorkel and a pair of fins. A wetsuit might also be needed, depending on where you go freediving. Some waters are very cold and make it necessary to wear neoprene. In other places the sun is so strong that you need a suit to protect your skin.Have you heard the quote “It is the photographer that takes the picture, not the camera”? Freediving is much the same. Acquiring a good freediving technique is more important than buying the latest gear. For example, it is easier to learn a proper fin kick with short fins, before moving on to longer freedive fins. Consequently many freedive schools will hand you snorkelling fins to start with. For other parts of gear, only the best is good enough. For example, when buying a mask, take the one that fits you best, regardless of the price. A compromise in fit will result in an unpleasant experience every time you use the mask. If you take good care of your mask you will have it for years, making it a good initial investment.Depending on what kind of diving you are planning, in the pool, the sea or in lakes, you may want to choose different equipment. In the following, we will indicate the most important points to consider when buying freedive gear for different purposes.',
          image: 'freediveequipment.png',
          title: 'Introduction',
          videoLink: '',
        },
        {
          content: 'It is important for the longevity of your equipment to keep it out of the sun. Most freediving equipment is made from materials sensitive to heat and UV light.All freedive gear will last longer if it is rinsed thoroughly in fresh water after every use. Fins usually come with small plastic shoe trees for the foot pockets. Do not throw these away and use them anytime you transport or store your fins. Always put your mask away in its box. If the mask came without a box, get one at your local dive shop.',
          image: '',
          title: 'Delicate material',
          videoLink: '',
        },
        {
          content: 'A freedive mask must enclose the nose. This enables you to equalise the rising pressure in the mask on descent. It is impossible to dive with other types of masks, e.g. swimming goggles, as they will lead to injury of the eyes when descending.',
          image: 'mask.png',
          title: 'Mask: Enclose Nose',
          videoLink: '',
        },
        {
          content: 'This is how you check at the dive shop if a mask is fitting perfectly:Flip the strap of the mask around so it is out of the way. Tilt your head back, look to the ceiling and place the mask on your face without any wiggling. Now try if you can suck the mask to the face by inhaling through the nose. If you can bring your head back to normal position and the mask stays in place, you have found a your mask.',
          image: 'mask.png',
          title: 'Assure good fit',
          videoLink: '',
        },
        {
          content: 'The volume of air between the face and the lenses of a freedive mask should be as low as possible as it will make the equalisation of the mask easier at depth. Masks with bigger volumes are used for scuba diving, where air is not a limiting factor for equalisation in general',
          image: 'mask.png',
          title: 'Low volume',
          videoLink: '',
        },
        {
          content: 'For safety reasons, you want to see the eyes of the freediver you are buddying. Mirrored or tinted lenses can make eye contact difficult or impossible and are thus unsuitable for freediving. While most masks have lenses made of glass, there are a few with plastic lenses. Glass is easier to be kept clean and scratches are less likely to occur. On the other hand, plastic lenses are more flexible and do not alter your vision. After all, glass or plastic is your choice and is of secondary importance. More importantly, pick a mask with a good fit for you',
          image: 'mask.png',
          title: 'Clear lenses',
          videoLink: '',
        },
        {
          content: 'The softer the skirt (the rubber part that is in touch with your face) the more forgiving the mask is on descent into the deep. A very rigid mask needs to equalised almost constantly to avoid pain from the rising pressure, while a freedive mask with a soft skirt will simply compress a bit to your face until you equalise it.',
          image: 'mask.png',
          title: 'Flexibility',
          videoLink: '',
        },
        {
          content: 'Before going freediving, spit on the inside of your mask lenses and rub it in thoroughly in order to avoid fogging of the mask. Anti-fog drops work as well but are much less environmentally friendly. Like all freedive gear, after every use rinse your mask well with fresh water. Allow it to dry in a place not exposed to direct sunlight. Put it back in its protection box before packing it away. Watch out for damaged straps. Replacement straps are not always in stock at your favourite dive shop. Thus, it is recommended to get a spare strap right away and store it in the protection box together with your mask.For general cleaning of your masks with plastic lenses, use toothpaste and a toothbrush or a few drops of dishwashing liquid and water. ',
          image: 'mask.png',
          title: 'Taking care',
          videoLink: '',
        },
        {
          content: 'You need a set of bi-fins to begin freediving in a swimming pool or open water. It is recommended to start with a pair of short fins to learn the proper finning technique first, before moving on to a longer set of freedive fins. Consequently using snorkelling fins is perfectly fine in the beginning',
          image: 'fins.png',
          title: 'Bi-fins',
          videoLink: '',
        },
        {
          content: 'While short bi-fins are good for training and developing your finning technique, longer fins are more powerful. As soon as your finning technique and your muscular strength and flexibility are ready to handle the greater resistance of long fins, you will create a lot more propulsion with them and thus be more effective in water.',
          image: 'fins.png',
          title: 'Length = Power',
          videoLink: '',
        },
        {
          content: 'Training is the key to efficient use of bi-fins. It takes time to achieve a good finning technique and working with a coach on a regular basis will improve your performance gradually. AIDA focuses on both, open water freediving and pool training. Most freedivers do not live by the sea and will train in pools throughout the year before going to open water on holidays. This is a very efficient way to train and get your finning performance to the next level enabling you to go deeper every time you are back in open water.In case you change from using one type of fin to another, allow for some adaption. You might even consider some pool training with your new fins before going into open water',
          image: 'fins.png',
          title: 'Techniques and training',
          videoLink: '',
        },
        {
          content: 'In freediving we use full foot pockets for bi-fins. Booties combined with scuba fins and ankle straps are not recommended for freediving as the connection between foot and fin is not very direct. Consequently the transmission of energy towards the fin blade is not very effective.The foot pockets should be tight but not painful, even after several hours of usage. If there is play between your foot and the pocket it is likely that you will get blisters. To avoid any friction use neoprene or Lycra™ socks. Wearing socks also contributes to a good insulation in cold water. There is a wide range of foot pockets on the market offering very different shapes. Invest enough time in your research to find your personal best fit',
          image: 'fins.png',
          title: 'Full foot',
          videoLink: '',
        },
        {
          content: 'Freedive fin blades are made of a great variety of materials such as plastic, carbon fibre or Kevlar. As a rule of thumb it can be said that the more advanced the construction, the more delicate the fins are. Plastic fins are perfectly fine all the way up to professional level and they are virtually unbreakable. A feature, which is very welcome in daily freediving. A pure carbon fin is a very efficient tool in water, but it can break by only putting it down on the ground the wrong way.Note that fin blades come in varying grades of stiffness and can often be bought independently from the foot pockets. However, not all fin blades will fit every foot pocket making it necessary to ask before buying',
          image: '',
          title: 'Plastic \u2013 fibre glass \u2013 carbon',
          videoLink: '',
        },
        {
          content: 'Rinse your fins after every use and dry them in a place not exposed to direct sunlight. Always transport your fins in a padded fin bag. When traveling by plane you usually have to check in your fins. Make sure your fin bag is stable and ready for rough handling.Always put your fins out of the way and never leave them on the ground. This way you avoid people stepping or dropping diving weights (or tanks!) on them.',
          image: '',
          title: 'Taking care',
          videoLink: '',
        },
        {
          content: 'Monofins derive from the sport of “fin swimming”. Fin swimming is a speed contests in swimming just below the water surface. Today, many freedivers own a monofin and appreciate them for allowing for better performance. Almost all competitive freediving is done with monofins.A monofin asks for an entirely different technique than bi-fins, which should be learned from scratch with a coach. The monofin technique activates a different set of muscles and asks for a great deal of physical flexibility. This requires a lot of practice, but once the technique is mastered, a monofin is more efficient than the best bi-fins.Dedicated companies in the field push the development constantly forward and produce more powerful monofins every year. Technology is constantly adapted by using our understanding of fluid dynamics and biomechanics to reproduce the functionality of flukes and foils from marine mammals and fish. Considering this, we are in for a constant stream of great surprises and astonishing inventions',
          image: 'monofin.png',
          title: 'Monofin',
          videoLink: '',
        },
        {
          content: 'The snorkel is a basic safety tool. It allows you to breathe while watching your buddy from the surface in the pool or in open water',
          image: 'snorkel.png',
          title: 'Snorkel',
          videoLink: '',
        },
        {
          content: 'The best snorkel for freediving is fairly rigid. Snorkels with too much flexibility have to be either firmly attached to the mask strap or be held upright with one hand',
          image: 'snorkel.png',
          title: 'Rigid',
          videoLink: '',
        },
        {
          content: 'It is easier to purge a snorkel from water when there is an according valve. However, valves tend to leak and are usually quite bulky.Snorkels sink! It is a good advice to attach a floating device to your snorkel, such as a bit of neoprene or insulation foam. This way a stray snorkel will not sink right away but can be spotted drifting at the surface.',
          image: 'snorkel.png',
          title: 'With/without purge',
          videoLink: '',
        },
        {
          content: 'Always remove the snorkel from your mouth before diving.A snorkel kept in the mouth while freediving is a direct water entry to your airways. This makes a rescue in case of a black out almost impossible.Take the snorkel out of your mouth after your one full breath and leave it with your buddy at the surface. You can also hold it in your hand or slip it under your weight belt while diving.',
          image: 'snorkel.png',
          title: 'Remove before diving',
          videoLink: '',
        },
        {
          content: 't is not absolutely recommended attaching the snorkel to the mask. The mask should be worn as loosely as possible while still ensuring a good seal to the face.When attaching a snorkel, you run the risk of flooding or even losing your mask due to the drag produced by the snorkel.Still many freedivers are content to have their snorkel attached to their mask. If you choose to do so, attach the snorkel at the back of your head where the mask strap is often separated into two parts. Attaching the snorkel at the back of your head will make it stick up vertically when you relax face down in the water. Attaching the snorkel on the side of your head (as most snorkelers tend to do) will drop the tip of the snorkel forward into the water as soon as you put your face in water. This is to be avoided, Try it in the pool or confined water first',
          image: 'snorkel.png',
          title: 'Attached to the mask?',
          videoLink: '',
        },
        {
          content: 'A freedive weight belt is made of flexible material such as silicone or rubber.',
          image: 'weightbelt.png',
          title: 'Weight belt',
          videoLink: '',
        },
        {
          content: 'Freedivers wear their belt on the hips rather than the waist to not interfere with belly breathing and duck dive movements. Pulling the flexible belt tight also keeps it in place and prevents it from sliding up and down along the body while upside down on descent',
          image: 'weightbelt.png',
          title: 'Worn on Hips',
          videoLink: '',
        },
        {
          content: 'To offset the buoyancy of your wetsuit rather use a greater number of small weights than only a few big chunks of lead. This way you can adjust your buoyancy in small steps,and symmetrically distribute the weights on your belt to avoid a rolling momentum.',
          image: 'weightbelt.png',
          title: 'Small Weights',
          videoLink: '',
        },
        {
          content: 'A freedive weight belt needs to have a quick release buckle which enables a onehanded removal in case of emergency. Make sure the tip of the loose end of the weight belt is tucked under the belt in a way that it is not blocking the release of the belt. This is the same procedure as in scuba diving.',
          image: 'weightbelt.png',
          title: 'Quick release',
          videoLink: '',
        },
        {
          content: 'A flexible weight belt can be worn quite tightly without being uncomfortable in any way. It also creates a seal between your pants and jacket to prevent water from flushing into your suit. This feature is essential when freediving in colder conditions.',
          image: 'weightbelt.png',
          title: 'Seals suit',
          videoLink: '',
        },
        {
          content: 'As all freedive gear it is best to rinse the weight belt after usage and keep it away from direct sunlight. Watch out for your feet and the ones of your buddies when manipulating weights. Always hold the belt at both ends or with the buckle closed when transporting it. If you can find them, use environment protection weights',
          image: 'weightbelt.png',
          title: 'Taking care',
          videoLink: '',
        },
        {
          content: '',
          image: 'wetsuit.png',
          title: 'Wetsuit: Protection from cold and sun',
          videoLink: '',
        },
        {
          content: '',
          image: 'wetsuit.png',
          title: 'Different thickness',
          videoLink: '',
        },
        {
          content: 'The closer the suit fits your body, the better it will keep you warm. Ideally your suit should be tailor made to avoid any water flush between the skin and the suit',
          image: 'wetsuit.png',
          title: 'Close fit',
          videoLink: '',
        },
        {
          content: 'Always wear a full body suit, even in tropical waters. This is to protect you from the sun, from stinging organisms like jellyfish and floating debris. Shorty-wetsuits can be sufficient in combination with rash vests. A freedive suit can have an integrated hood, which protects your head and neck from the sun and keeps you warm. Water augments the loss of body heat through the head. Covering the head with a hood allows us to use thinner neoprene while having the same overall insulation capacity. In cold water an additional swimming cap can be of great help.',
          image: 'wetsuit.png',
          title: 'Full body',
          videoLink: '',
        },
        {
          content: 'Freedive suits are made of two pieces: High waist or long john pants plus a jacket with a beaver tail. As they are tailor made, no zippers or Velcro seams are needed to prevent water flush. Having no zippers also means more mobility, less water drag and consequently better streamlining.',
          image: 'wetsuit.png',
          title: 'No Zipper',
          videoLink: '',
        },
        {
          content: 'A freedive suit should be made of high quality neoprene. A good stretch ability of the material will make your movements easier, but will also show signs of wear more quickly. Extremely soft material will be more affected by pressure changes in open water freediving and thus will lose some of its flexibility and insulation capacity over time.',
          image: 'wetsuit.png',
          title: 'Mobility',
          videoLink: '',
        },
        {
          content: 'Depending on the material, you have to take special care when putting on and taking off your wetsuit. For instance, a competition suit can only be put on using a lubricant like soapy water or talcum powder, as it will immediately break if you try otherwise.Choosing the neoprene according to your needs is part of the ordering process of a custom wetsuit. A competition suit is probably made with “open cell” on the inside, combined with a very smooth and slippery layer (“slick” or “smooth” skin) on the outside. This makes it on the one hand very efficient in terms of low water resistance and high insulation capacity, but extremely delicate on the other hand. You can increase the durability of your custom suit by adding linings, both on the inside and outside. However, this will add some water resistance and you will lose some insulation capacity. There is no perfect suit for every purpose. You will have to design and order your suits to your personal needs, performance and temperature of water you want to dive in. The first time you order a custom made suit, the sheer choice can be daunting. Ask your AIDA Instructor for advice on choosing a wetsuit that suits you best.',
          image: 'wetsuit.png',
          title: 'Fragile',
          videoLink: '',
        },
        {
          content: 'With a lanyard you can attach yourself to the vertical dive line. When using your fins for diving you will attach the strong strap or Velcro of the lanyard to your wrist – usually the one where you do not wear your dive computer. In free immersion (FIM) it is more comfortable to attach the lanyard to your ankle, so it does not interfere with your arm movement. When diving without fins (CNF), the lanyard is mostly attached to a D-ring on the weight belt.The carabiner at the other end of the lanyard is then clicked in to the dive line so it can freely glide, without creating any noticeable friction. It is important that your lanyard complies with the AIDA standards in terms of stability and stiffness. Improperly produced lanyards can easily tangle with the dive line',
          image: 'lanyard.png',
          title: 'Lanyard: Attaching to the dive line',
          videoLink: '',
        },
        {
          content: 'The lanyard allows you to keep a perfectly vertical direction along the dive line even in very bad visibility or when diving with closed eyes. Many deep dives are done without a mask, so the vision of the divers is quite reduced. The lanyard will give the freediver immediate feedback if he/she is losing his/her bearings',
          image: 'lanyard.png',
          title: 'To keep the bearings',
          videoLink: '',
        },
        {
          content: 'In a competition setup or for deep freediving in general the dive line is not simply attached to the buoy, but will run over a mechanism with wheels and breaks. The other end of the dive line is a counterweight attached which is considerably heavier than the weight on the dive line. In a case of emergency, e.g. when a freediver is not within vision of the safety divers in due time, the break can be released. The counterweight descends immediately and pulls up the smaller bottom weight. The lanyard of the overdue freediver is caught by the rapidly ascending bottom weight and the diver is hoisted back to the surface',
          image: 'lanyard.png',
          title: 'For rescue purposes with a counterweight',
          videoLink: '',
        },
        {
          content: 'It is important that the lanyard can be released immediately in case it gets tangled. Velcro straps usually use the same quick release as used in surfing leashes, while lanyards that use fabric straps must be combined with a quick-release shackle',
          image: 'lanyard.png',
          title: 'Quick release at the wrist',
          videoLink: '',
        },
        {
          content: 'The freedive buoy, or float, is an integral part of a freedive teaching setup. But also for training and for competition some form of setup with a vertical dive line is essential.',
          image: 'freedivebuoy.png',
          title: 'Freedive Buoy',
          videoLink: '',
        },
        {
          content: 'For good visibility you want your float to be made of a bright signal color like orange or red. As an additional safety feature a diver flag can be attached to the setup. This might be even compulsory if you are freediving in an area with boat traffic.The freedive buoys that are in use today have a flat surface, which enables buddy teams to keep eye contact across the float after surfacing. A flat surface is also ideal if a freediver needs to rest and in a case of emergency a victim can be positioned face up on top of the float if no other means of in water transport is available',
          image: 'freedivebuoy.png',
          title: 'Safety Feature',
          videoLink: '',
        },
        {
          content: 'Every freedive buoy has a central mounting point on its lower side, where the vertical dive line can be firmly attached. It is important that the buoy is constructed in such a way that the dive line and bottom weight (see below) cannot be ripped out by a simple failure of material. The dive line is a static (non-stretchy) rope with a diameter of 8mm or more',
          image: 'freedivebuoy.png',
          title: 'Dive line firmly attached',
          videoLink: '',
        },
        {
          content: 'A shorter and thinner tethering line allows you to attach the buoy to a mooring line for the duration of the freedive session. A 4mm thick and 10m long line is just fine for this. Also, such a tethering line is essential to “daisy chain” several freedive buoys to each other',
          image: 'freedivebuoy.png',
          title: 'Tethering line',
          videoLink: '',
        },
        {
          content: 'Ideally there are two large carabiners available at the mounting point below the float: One carabineer allows a secure connection between the dive line and the float, while the second carabineer makes it easier to shorten or lengthen the rope',
          image: 'freedivebuoy.png',
          title: 'Carabiners',
          videoLink: '',
        },
        {
          content: 'Firmly attached handles around the buoy make your relaxation phase easier. In an open water session performed in the sea you always want to be in touch with either the freedive buoy or the tethering line between buoys: Even on the most quiet day there is a little current which can slowly drag you away from your freedive group while you are relaxing with your eyes closed. Also, the handles can be used to hold a pair of fins in case you choose to switch to “no fins” freediving during the session',
          image: 'freedivebuoy.png',
          title: 'Handles to hold on to',
          videoLink: '',
        },
        {
          content: 'The bottom weight pulls the dive line to a vertical position. It should be as light as possible to make handling easy. For a teaching session a somewhat heavier bottom weight of 7kg is fine, an even heavier weight can be more effective for example for free immersion dives. The bottom weight can be built with a scuba weight belt and normal diving weights, but any block of led is ideal as well.',
          image: 'freedivebuoy.png',
          title: 'Light Bottom Weight',
          videoLink: '',
        },
        {
          content: 'For dives deeper than twenty meters or in bad visibility AIDA advises the use of a lanyard. Upon your descent along the dive line, the carabineer of the lanyard will be stopped by a tennis ball, which is attached 1.5-2m above the bottom weight. This avoids entanglement of the lanyard with the bottom weight or bottom plate (see below)',
          image: 'freedivebuoy.png',
          title: 'Tennis ball to stop lanyard',
          videoLink: '',
        },
        {
          content: 'In a freedive competition the target depth of each dive is indicated by the bottom plate. This is a horizontal round plate made of any sorts of material. For example a Frisbee can be modified for that purpose. Many freedive instructors and buddy teams have a bottom plate permanently built into their setup to simulate the competition situation',
          image: 'freedivebuoy.png',
          title: 'Bottom plate',
          videoLink: '',
        },
      ],
      title: 'EQUIPMENT FOR FREEDIVING',
    },
    {
      completed: false,
      innerModules: [
        {
          content: 'From recreational to extreme/competitive freediving Within AIDA there is a total of eight freediving disciplines. In the AIDA2 Course, you will be introduced to four of them already: STA, DYN, FIM and CWT.Reminder: In some parts of the world, “freediving” is often coined with the term “apnea”. Literally translated from the Greek “apnoia” it means “without breathing” and can be used as a synonym for freediving. Due to AIDA’s French origin the term “apnea” is used frequently',
          image: '',
          title: 'Introduction',
          videoLink: '',
        },
        {
          content: 'A breath hold performed face down in a pool or confined water is called static apnea (STA). It is a popular competitive discipline as much as an important form of training. ',
          image: 'staticapnea.png',
          title: 'Static Apnea (STA)',
          videoLink: 'https://player.vimeo.com/video/84772021?h=01d43f7b07',
        },
        {
          content: '',
          image: 'staticapnea.png',
          title: 'A breath hold performed face down in a pool or confined water is called static apnea (STA). It is a popular competitive discipline as much as an important form of training.',
          videoLink: '',
        },
        {
          content: 'While it is often allowed to do static training in pools, the usage of fins and suits frequently are not. This makes static training in water the most accessible form of training. Furthermore, there are many forms of dry static training. “Static” is thus a very versatile tool to work with on a daily basis.',
          image: 'staticapnea.png',
          title: 'Most accessible training form',
          videoLink: '',
        },
        {
          content: 'Holding your breath for an extended time is as much a physical task as it is a mental game. Your mind does not like to stop working and it has a hard time doing nothing. But that is exactly what we ask our minds to do during a static breath hold: Stopping to think, and not wasting any energy on unneeded activity.',
          image: 'staticapnea.png',
          title: 'Mind game',
          videoLink: '',
        },
        {
          content: 'After a while in static breath hold, the mind game also becomes a physical one. Some of your breathing muscles will contract and release to initiate the exhalation of excess CO2. Sometimes this is also referred as “convulsions”, but that is not very accurate. If you are able to allow the contractions to happen, they are no more than muscles tensing up and releasing in a more or less rhythmical pattern. As such, these contractions can be used as a timer to gauge one’s breath hold. As they are indicators for rising CO2 level in the body, they can be counted and thus provide valuable information about how much longer you can go on with your breath hold (see a description on how – and why – counting contractions can be useful in chapter 3.3)',
          image: 'staticapnea.png',
          title: 'Contractions',
          videoLink: '',
        },
        {
          content: '',
          image: 'dynamicapnea.png',
          title: 'Dynamic Apnea (DYN, DNF)',
          videoLink: 'https://player.vimeo.com/video/84857817?h=452c9e01a6',
        },
        {
          content: 'Dynamic apnea (DYN) is about the horizontal distance covered under water on one breath. Like STA, dynamic apnea is introduced in the AIDA2 Course.This discipline is mostly done in pools. It is also possible to perform dynamic apnea in any confined water, such as a sheltered beach, or a lagoon. As long as there are no waves, no currents and reasonable visibility, dynamic can be performed almost anywhere',
          image: '',
          title: 'Horizontal distance covered on one breath',
          videoLink: '',
        },
        {
          content: 'There are two forms of dynamic apnea in AIDA: With fins or without. In a competition, monofin and bi-fin divers compete with each other in the same category.',
          image: 'dynamicapnea.png',
          title: 'Dynamic with fins: DYN',
          videoLink: '',
        },
        {
          content: 'The other form of dynamic apnea is performed without fins, with the abbreviation DNF (dynamic no fins). With the use of arms and legs the freediver propels himself/herself in an extended breaststroke movement. DNF is a very demanding discipline from a technical standpoint. DNF is not taught in the AIDA Courses, but your AIDA Instructor will provide you with additional training possibilities if you wish so.',
          image: 'DNF.png',
          title: 'Dynamic no fins: DNF',
          videoLink: '',
        },
        {
          content: 'Dynamic apnea is an important general training discipline in order to work on body posture, finning technique, CO2 tolerance and so forth. For many freedivers with limited or no access to open water this discipline is their main activity “between trips”.Pool operators quite often do not permit fins, wetsuits or even masks in the pool during public hours. If you want to train in a pool for the first time, make sure you ask about the local regulations. In many places, however freediving or apnea clubs with dedicated training hours can be found. Ask your AIDA Instructor about local freediving clubs, where you can find fellow freedive buddies and a fun group to train with',
          image: '',
          title: 'Important training discipline',
          videoLink: '',
        },
        {
          content: 'Remember that you need a dedicated and qualified buddy to do in-water apnea training in a pool (STA, DYN, DNF), there is no exception to this rule. A lifeguard on duty does not qualify as a buddy',
          image: '',
          title: 'Lifeguard is NOT a buddy',
          videoLink: '',
        },
        {
          content: 'In free immersion you pull yourself down and back up the dive line without the use of fins. Competitive FIM is often performed without wearing fins, however during an AIDA Course FIM, dives are performed with fins due to safety reasons.The discipline is introduced both in AIDA1 & AIDA2 Courses and is further trained on every following course level',
          image: 'fim.png',
          title:
            'Free Immersion (FIM): Pulling yourself down and back up a line',
          videoLink: '',
        },
        {
          content: 'Free immersion is a vital part of every open water freedive session. It is the most common way to start your session by slowly pulling yourself down to a comfortable depth. By doing so you can spend time under water without exerting yourself while giving your body and mind time to switch into “freedive mode”.Athletes in a competition get ready for their dives in a similar way. Quite often they will use a perfectly timed series of FIM dives to adapt themselves to the water while still “saving their legs”. After this warm-up process with FIM, the athletes are ready for their deep competition dive with “fresh” legs for CNF or CWT',
          image: 'fim.png',
          title:'Good as a Warm Up',
          videoLink: '',
        },
        {
          content: 'This is probably the most known discipline of freediving. In this discipline you will swim down and back up along a dive line, using the same amount of weight. Hence it is called constant weight (CWT). It is introduced to beginners both in AIDA1 and AIDA2 Courses',
          image: 'cwt.png',
          title:
            'Constant Weight (CWT, CNF): Swim down and back up using the same amount of weight',
          videoLink: '',
        },
        {
          content: 'Constant weight freediving can be performed with fins or without. In competition, freedivers using bi-fins or monofins share one category called CWT',
          image: 'cwt.png',
          title: 'Constant weight with fins: CWT',
          videoLink: '',
        },
        {
          content: 'Diving to depth without using fins is called constant weight no fins, in short CNF. As this form of freediving is often depicted as the purest form of freediving it gets a lot of well-deserved media attention',
          image: 'cnf.png',
          title: 'Constant weight no fins: CNF',
          videoLink: '',
        },
        {
          content: 'Both disciplines CWT and CNF share the rule of grabbing the rope only once, and that is when you turn. However, it is allowed to glide along the dive line, using one hand to “feel” the rope to keep your orientation. Athletes diving without a mask often apply this form as their eyes are more or less closed during their dive',
          image: 'cnf.png',
          title: 'Grab the rope only to turn',
          videoLink: '',
        },
        {
          content: '',
          image: 'vwt.png',
          title: 'Variable Weight (VWT)',
          videoLink: '',
        },
        {
          content: 'In the simplest form of variable weight (VWT) a freediver descends holding a weight in his hand. The weight is attached to the dive line and will be stopped at the targeted depth. More sophisticated setups use a weighted sled to which the freediver holds on to during descent.',
          image: 'vwt.png',
          title: 'Descend with weight or sled',
          videoLink: '',
        },
        {
          content: 'After reaching the targeted depth, the freediver will ascend using his own propulsion. In VWT the freediver commonly does not use a weight belt to offset the buoyancy of your freedive suit, which makes the ascent easier',
          image: 'vwt.png',
          title: 'Ascend without weights',
          videoLink: '',
        },
        {
          content: 'The freediver can use the rope to pull himself up or use his fins to get back to the surface. Also a combination of both means of propulsion is possible',
          image: 'vwt.png',
          title: 'Ascend swimming and/or pulling on the line',
          videoLink: '',
        },
        {
          content: 'Variable weight is a great tool in advanced freediving to adapt to depth. VWT is also done for pure pleasure or for record attempts, but there are no AIDA ratified competitions in this discipline due to the risk factors involved. VWT is introduced in the AIDA4 Course',
          image: '',
          title: 'Non Competition Discipline',
          videoLink: '',
        },
        {
          content: 'In No Limits Freediving (NLT) the freediver descends most commonly by holding on to a weighted sled.Ascend using lifting device, At the target depth, the freediver will often use compressed air to fill a lift bag by opening the valve of a tank attached to a sled. Any other lifting devices are allowed as well. The propulsion of the lifting device lifts brings the athlete back up and close to the surface. He will then let go of the lifting device and ascend slowly in a controlled way along the dive line for the last meters of the ascent',
          image: 'nolimits.png',
          title: 'No Limits (NLT)',
          videoLink: '',
        },
        {
          content: 'This discipline has been made popular by the movie “Le Grand Bleu” (The Big Blue). Unlike depicted in the movie there are no competitions in NLT anymore, as the discipline has serious risk factors to be considered. Record attempts have to be approached carefully and in a controlled environment, supervised by experts. The development of a functioning NLT-setup is a task that takes a maximum amount of experience. Furthermore, it takes years of adaption for the human body to handle the extreme depths that must be reached for today’s NLT records.However, done under the supervision of an experienced instructor, NLT to moderate depths is great fun and safe',
          image: 'nolimits.png',
          title: 'No Competition Discipline',
          videoLink: '',
        },
      ],
      title: 'FREEDIVING DISCIPLINES',
    },
    {
      completed: false,
      innerModules: [
        {
          content: '',
          image: 'coc.png',
          title: 'Mind your surroundings',
          videoLink: '',
        },
        {
          content: '',
          image: 'coc.png',
          title: 'Mind your long fins',
          videoLink: '',
        },
        {
          content: '',
          image: 'coc.png',
          title: 'Mind Marine Life',
          videoLink: '',
        },
        {
          content: '',
          image: 'coc.png',
          title:
            'Do not remove anything from the sea / Do not leave anything in the sea',
          videoLink: '',
        },
        {
          content: '',
          image: 'coc.png',
          title: 'Mind the dive site',
          videoLink: '',
        },
        {
          content: '',
          image: 'coc.png',
          title: 'Be a role model',
          videoLink: '',
        },
      ],
      title: 'FREEDIVER CODE OF CONDUCT',
    },
  ];
  constructor() {}
  getAllModules() {
    return this.AIDA2Default; //returns course structure file
  }

  getModuleTitle(moduleNo) {
    return this.AIDA2Default[moduleNo - 1].title; //takes a module number, and returns the title
  }

  getModuleTitleList() {
    //returns an array of all module titles in current course
    var newArray = [];
    for (let moduleItem of this.AIDA2Default) {
      newArray.push(moduleItem.title);
    }
    return newArray;
  }
}

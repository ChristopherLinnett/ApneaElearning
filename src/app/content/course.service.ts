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
              content: 'Millions of people around the world enjoy snorkelling. Many of them will also take a big breath and dive down for a few brief moments to have a closer look at a colourful coral, a shy turtle – or just for the fun of it. That is where freediving begins. If you read this manual it is very likely that you have taken that big breath already many times before. In fact, freediving is a very common activity and by far more than an extreme sport as it is often depicted in the media.\nNew born babies enjoy being under water simply for the fun of it. Holding our breath and allowing the water to carry us seems to be part of human nature. Learning to freedive as adults is a way to re-discover these forgotten abilities. \nYour first lessons in freediving are mostly about letting go of unneeded physical and mental activity in order to allow yourself to relax. This might take time, but it will come. “Relaxation” is probably the most important word in freediving.',
              image: "introduction.png",
              title: "Introduction",
              videoLink: ""
          },
          {
              content: 'The AIDA Education Program teaches recreational freediving. Competitions and record attempts are part of extreme freediving. Somewhere in between recreational and extreme freediving is a blurry line that separates the two.\n Looking for personal limits and taking a peek beyond them is probably part of human nature. This is exactly what you do when staying under water just a little bit longer than you would without a basic knowledge of freediving – you are exploring your own self. Freediving is very much about discovering new sensations by learning and developing new capabilities. Going one step beyond and shifting your momentary boundaries in a relaxed, comfortable manner – this is recreational freediving.\n Going for a world record, developing an even faster sled for deep diving – this means not only going beyond your personal boundaries, but also pushing the known limits of human capacity. Freediving in these dimensions requires total devotion to the sport and a deep commitment to the lifestyle of an athlete. This includes a strict training schedule, a rigorous diet, healthy sleeping patterns and so forth. In short, being a freedive athlete will outline your whole life. This is categorized as extreme freediving',
              image: "",
              title: "Recreational and Extreme Freediving",
              videoLink: ""
          },
          {
              content: 'In certain countries such as Spain, France, Italy, or others, freediving is also referred to as “apnea”. It is derived from the Greek word “apnoia” and literally translated stands for “without breathing”. Technically, freediving starts when you hold your breath in water. The importance of this simple definition cannot be overstated. All safety procedures that you will learn in the AIDA Education System become valid in the very moment a person is doing a breath hold in water. Obviously, this is the case in open water, but it is equally important to keep this in mind when holding your breath in swimming pools, or even in your bathtub. The primary directive in is thus:\n\n Always freedive with a qualified buddy\n\n In your AIDA Education you will learn how this simple rule, along with a few more, make freediving a very safe and enjoyable experience.',
              image: "freedivingequalapnea.png",
              title: "Freediving = Apnea",
              videoLink: ""
          },
          {
              content: "Freediving begins when you hold your breath in water. This encompasses a great variety of activities and explains the existence of the large range of specialities. Underwater hunting or spearfishing is just as much freediving as is underwater rugby or underwater hockey. The latter two are even getting played in leagues. Indeed, very different sports, but after all, all of them belong to the freedive family. All of these activities or sports have one point in common: Peaceful silence under water. No matter if you are hunting, or going for a world record in deep freediving, or if you take your camera down to a few meters; the way to approach freediving is Fun freediver exploring a reef. \n As freedivers we become one with the underwater world. It is the most natural way of being under water on a breath hold – just like any other mammal that lives in water. If we move gracefully and steadily and do not exhale bubbles, underwater life is much less scared of us. Curious fish will approach us. We do not need to “chase”, we only need to wait to be approached.\n Whatever your choice of freediving is, you can be assured to learn a great deal about yourself. Freediving confronts us with one of our deepest fears: The fear of drowning. In your AIDA Course you will learn why this will not happen. But fear is unlikely to diminish just through knowledge. Since the time we were babies, the “urge to breathe” has been drilled into us as a command of our body. We have learned to obey immediately, or damage will be done, as we assume. In freediving you learn that the “urge to breathe” is not hard wired – it is information about what is happening in your mind and your body. You will learn to deal with that information in a new and safe way.This takes some time and repetition. Soon you will get to the point where you would usually want to breathe. But you purposely decide not to, even if it is just for another few moments. This is where the freediving journey begins.Freediving can be done literally everywhere where you can find water: It certainly is a beautiful experience to visit warm and clear tropical waters to go down on a breath hold, but just as many apneists dive and train regularly in lakes, pools or even rivers.",
              image: "",
              title: "A diverse activity",
              videoLink: ""
          },
          {
              content: "Maybe it is hardly possibly to explain the fascination of freediving to someone who has never tried before. Too often freedivers are talked down as thrill seekers or daredevils by people who have never experienced a single breath hold dive. Without doubt, it is exhilarating for freedivers to be amongst people who do not need an explanation for the inexplicable. That is why freedivers like to mingle with other freedivers – in real life as much as on the web – to exchange their experiences, tips and videos. This way a worldwide freedive community has established. Nowadays you can find freedive buddies and schools almost anywhere you go.The human body adapts to freediving. The more you freedive, the greater this adaptation and the more enjoyable freediving becomes. Even when you are not in the water you can perform a great variety of exercises and activities to support these adaptations. It may be by starting a regular - or change your existing - yoga practice, change of diet or dry apnea exercises. Soon you may also change your travelling plans to be in the water as often as possible.To some of us, freediving is a fun activity to do on holiday, for others however, it is a way of life.",
              image: "awayoflife.png",
              title: "A way of life",
              videoLink: ""
          },
          {
              content: "Freediving always happens in a group of at least two people – the buddy team. You will discover that freediving connects you with your buddy in a very intense way. Through the trust you have to build up and responsibility to watch each other’s back, many friendships have been formed. Whatever it is you see in freediving, through the AIDA Education Program you will quickly discover how freediving is enjoyable and – if you want it to be – a school for life.",
              image: "asocialactivity.png",
              title: "A social activity",
              videoLink: ""
          },
          {
              content: "Established in 1992, AIDA stands for the French term “Association Internationale pour le Développement de l’Apnée”, the international association for apnea development. The organisation was initially French and it is now based in Zürich/Switzerland.AIDA is committed to paperless administration as much as legally possible. The organisation thus uses the website www.aidainternational.org as its major means of communication.",
              image: "",
              title: "The acronym 'AIDA'",
              videoLink: ""
          },
          {
              content: "AIDA is a non-profit organisation. In their day-job, most people working for AIDA are specialists in their fields of trade. For example, the AIDA Medical Commission consists of leading Emergency Room specialists, trauma experts and experienced diving doctors. Their day job keeps them up to date in their respective topics, which in turn allows AIDA to be at the forefront of latest science and experience.The national AIDA organizations largely rely on volunteer work to organise meetings, courses and competitions. Apart from experienced instructors or judges, these events always ask for a lot of manpower in administration, printing, driving around, helping hands here and there and good souls. Volunteering in an AIDA event isgreat fun and a perfect way for you to get to know your local freedive community!You can find your national AIDA organization through the official AIDA website.",
              image: "",
              title: "Non-profit organization",
              videoLink: ""
          },
          {
              content: "The goal of the AIDA Education Program is to share the knowledge and skills to enjoy freediving in a safe and responsible way. It caters for absolute beginners as much as for advanced freedivers and takes you through a comprehensive, professional qualification structure all the way up to AIDA Instructor level. Freediving has probably been around since the dawn of mankind. Just look at the phenomenal Japanese pearl diving Amas, the Greek sponge collectors or the Filipino, Indonesian or Malaysian water tribes with their spectacular underwater hunting capabilities. Compared to that, recreational and competitive freediving as we know it today is still a very young phenomenon. Because of that, the learning curve in modern freediving is still steep. Techniques get introduced, refined, adapted, and replaced all the time.The AIDA Education Program is kept on top of this rapid development by regular revision and adaptation to the latest research in order to remain the standard of worldwide freediving Education since its inception in 1992.",
              image: "freedivingeducationprogram.png",
              title: "Freediving education program",
              videoLink: ""
          },
          {
              content: "Best practice in safety standards is obviously the most important part of AIDAFreedive Education. Competition rules and education programs always follow the latest safety standards, which cannot be compromised. It is well possible that you will have encounters with freedivers, spear fishers or snorkelers that enjoy their freediving in a completely different way from what you are taught by your AIDAInstructor. Different knowledge and opinions of these - sometimes very experienced - water(wo)men does not qualify them as incapable, but it shows how quickly modern freediving still evolves",
              image: "",
              title: "Freediving safety standards",
              videoLink: ""
          },
          {
              content: "Last but not least, AIDA oversees all official freediving competitions as well as national and international records. Trained and certified AIDA Judges implement and supervise the application of all valid safety standards on various levels – from a small local competition up to the yearly AIDA World Championships.",
              image: "",
              title: "Freediving competitions & world records",
              videoLink: ""
          }
      ],
      title: "INTRODUCTION TO FREEDIVING"
  },{
      completed: false,
      innerModules: [
          {
              content: "The goal of the AIDA2 Freediver Course is to allow you to gain a good understanding of freediving. From the duck dive, over finning technique to equalisation – you will learn all basic skills, step by step. Many freediving novices are concerned about numbers, such as minutes of breath hold or depth of a dive in order to become a certified freediver. In fact, the numbers show that you have mastered the basic skills and thus meters and seconds are not the primary concern.",
              image: "",
              title: "Introduction",
              videoLink: ""
          },
          {
              content: "To enroll in an AIDA2 Course you must be able to swim at least 200m non-stops without fins and at least 300m non-stops with mask, fins and snorkel. The AIDA2 Course is designed for beginners with no previous experience in freediving. It is not required having completed the AIDA1 Course.",
              image: "",
              title: "Prerequisites",
              videoLink: ""
          },
          {
              content: "Freediving is for everyone and there is no specific diving background needed. All other forms of diving (scuba, technical, etc.) mainly focus on how to handle your dive equipment in a safe and efficient way. In freediving the primary skills you learn is how to handle yourself, and then how to deal with gear.The greatest advantage for beginner freedivers is to feel comfortable in water, to allow it to carry you, and to be able to “let go”. Being comfortable in water is of course related to how much time you already spent in water, be it as a scuba diver, a surfer or a swimmer – the more, the better.",
              image: "",
              title: "Not only for divers",
              videoLink: ""
          },
          {
              content: "Freediving is a very safe, enjoyable and very common activity in water. Still, it often is depicted as an extreme sport, meant for only a daring few. This is how freediving is often portrayed in media and results in a huge gap in perception. Freediving is in fact very safe if – and that is a very important “if” - you stick to a few basic but crucial rules. The most important ones are: \n Always freedive with a buddy \n  Relax before you hold your breath \n  Be correctly weighted \nTo properly learn and apply these rules is the main goal of the AIDA2 Course. Higherlevel follow-up courses will then build up on these basic techniques to take you deeper into water, deeper into the experience of yourself, one step at the time.",
              image: "",
              title: "Be a safe freediver",
              videoLink: ""
          },
          {
              content: "For most AIDA Instructors, teaching freediving is not what they do for life, but what they live for. They offer training on a club basis, mostly in pools, sometimes in lakes or the sea – freediving is so diverse that you can find an AIDA Instructor almost everywhere on the planet. Only a few instructors actually make their living from teaching and thus, live and work in a place where open water freediving is possible on a daily basis. Part of AIDA Instructor Training is to write a paper about freediving. The candidates are asked to make best use of their personal or professional background and add to the already existing body of knowledge. A physiotherapist for example may add specific valuable techniques and information to his/her teaching, and so can an engineer in hydrodynamics. Hence, it is a great advantage that AIDA Freedive Instructors come from very diverse backgrounds and often stay in their daily trades. The relationship between teacher and student always depends on the personalities involved. A certain AIDA Instructor might be perfect for you in his/her competitive thinking and approach, while the same instructor can be daunting to others. One student prefers to be instructed “hands on” on how to use muscles correctly, while another one does not like to be touched at all. Instructors are not machines, but professionally trained individuals with a variety of characters and backgrounds. An open communication between the instructor and the students is key to a pleasant experience on every level of freediving, but especially in the beginning when you take your first steps into liquid. Do not be ashamed – tell your instructor about your fears and let him know about your anxiety or how exited you are. It is perfectly fine to be a little bit on the edge, but not over it. Your instructor can handle it and will take care of you",
              image: "diversebackgrounds.png",
              title: "Diverse backgrounds of freedive instructors",
              videoLink: ""
          },
          {
              content: "Since its inception in 1992, AIDA developed a comprehensive set of standards and guidelines how to teach freediving. The AIDA Education System is growing and constantly evolving due to over twenty years of teaching experience, competition results and record surveillance, combined with the latest research in the field of water related science.The AIDA Education System provides a comprehensible framework for teaching freediving in a safe way. This framework allows and asks of every AIDA Instructor to add (but not omit) information, techniques and teachings, and make best use of his/her personal background and experience.The AIDA Education System gets reviewed and updated regularly.",
              image: "",
              title: "Standardised Education",
              videoLink: ""
          },
          {
              content: "While the Instructor’s performance and experience as an athlete can be a plus, the best athlete is not self-evidently the best coach or instructor. Encountering obstacles in one’s own education and training helps the AIDA Instructor later to understand students’ needs and problems.The AIDA Education System is a framework that defines sets of skills, which have to be taught in every AIDA Freediving course. To some extent it is then up to the AIDAInstructor, how to teach you these skills. A competitive and directive instructor will probably be a very good teacher for you if your desire to become an athlete and to train on a full year basis. If you are more interested in breath-hold photography, you might want to look out for an instructor who does exactly that, and so on. All AIDA Instructors will teach you the same basic knowledge and skills that are defined in the AIDA Education System – and what they will add to that, what you will learn beyond the written word, that is up to you and your instructor of your choice",
              image: "",
              title: "Athlete does not equal Instructor",
              videoLink: ""
          },
          {
              content: "You can start any AIDA Course with one instructor and finish it later with another. The only constraint is that you have to continue your education within one year. It is also quite common that several instructors share the teaching during one course.",
              image: "",
              title: "Multiple Instructors Possible",
              videoLink: ""
          },
          {
              content: "Your instructor handles your registration with AIDA International and you will receive an automatically generated message to the email-address you have supplied to your instructor. This message contains a link to EOS, the AIDA Education Online System, in which you mention some personal data, including your postal address.Please check if you have received an email from EOS right after you handed in your details to your instructor. It is well possible that you will have to also check your spam folders, as automatically created messages tend to end up there. It is important that you provide accurate and up-to-date information, also by logging in to your EOS account anytime later in case you need to change some details. ",
              image: "registration.png",
              title: "Registration with AIDA / EOS",
              videoLink: ""
          },
          {
              content: "Before starting your AIDA Course you will need to provide some important paperwork to your instructor. This way AIDA makes sure that you are fit for and aware of the risks of freediving",
              image: "",
              title: "Paperwork",
              videoLink: ""
          },
          {
              content: "The AIDA Medical Statement states potential reasons for not making it possible for you to freedive. It is similar to the list of questions used in scuba diving. All questions ticked NO means you are set to start your freedive course. Any answer ticked YES means you will have to provide written medical clearance by a qualified doctor. For this, ask your doctor to use the designated part of the form. Be honest about your medical condition and mention previous minor surgeries or mild cases of asthma. In case you are embarking to a remote island for doing your AIDA Course, please make sure that you are in possession of any needed paperwork BEFORE you leave your home destination. The medical statement must be filled in, signed and handed in to your AIDA Instructor at the beginning of the course",
              image: "",
              title: "Medical Statement",
              videoLink: ""
          },
          {
              content: "In many countries you will have to hand in a signed AIDA Liability Release prior to any in-water activity. This form is to emphasise that freediving is an absolutely safe activity as long as you follow the rules indicated and taught by your instructors. AIDA Courses have an impeccable safety record in more than 20 years of teaching, and we would like to keep it that way. This waiver says that you have understood that you are the most important part of freediving safety.",
              image: "",
              title: "Liability Release",
              videoLink: ""
          }
      ],
      title: "INTRODUCTION TO AIDA2"
  },{
      completed: false,
      innerModules: [
          {
              content: "Here is an important fact about breathing in freediving: It is overrated! There is no magic breathing technique that will give you a safe breath-hold of several minutes. The word “safe” is a very important one in this context. The still young history of freediving is overflowing with discoveries and teachings of spectacular breathing patterns, but experience and modern science shows that they all have one thing in common: They are unsafe for beginners.In this chapter you will learn how to achieve great results in the safest way. The key to a long breath hold can be summarised in one word: relaxation.",
              image: "breathingcycle.png",
              title: "Introduction",
              videoLink: ""
          },
          {
              content: "At any given time of resting your blood is fully saturated with Oxygen. You can easily prove this to yourself by putting an Oximeter (device to monitor level of oxygen in your blood) on a finger. The reading for a healthy person is always between 96% and 99%, which is the achievable maximum. If your reading is not within these limits, it is either because you are exerted or you have a specific health condition. Both are indicators that you should not freedive or even hold your breath at this moment.Being fully saturated with Oxygen at any given time leads us to a striking conclusion: The preparation for holding your breath has nothing to do with “oxygenating the body”! Instead, the last phase before a breath hold is about physical and mental relaxation and focus. The more relaxed you are physically and mentally, the less Oxygen you are using. This is what enables you to hold your breath safely for an extended time",
              image: "",
              title: "Oxygen (02) Saturation",
              videoLink: ""
          },
          {
              content: "Every breath hold is a cycle of the four above phases.These four phases will be explained step-by-step in this chapter. You can try out everything as you read, and then go into your first full breath hold cycle. Feel free to explore in the dry while lying down on your bed or on a yoga mat. As soon as you feel like holding your breath in water, the first and most important safety rule of freediving applies: Always freedive with a buddy. A lifeguard at the other end of the pool is not good enough. A person qualified to perform freediver rescue techniques needs to watch over you at all times",
              image: "breathholdcycle.png",
              title: "The Breath Hold Cycle",
              videoLink: ""
          },
          {
              content: "We differentiate between two ways of breathing: The more common way of breathing is happening in the upper part of the chest and is consequently called chest breathing. The more unknown other part of breathing is happening below your chest and expands your belly on every inhalation. It is thus also called belly breathing.It is important to know that you can apply belly breathing at any time, most likely you do it unconsciously while you are sleeping, and for sure you did it in your very early days: Babies can only breathe into their bellies. Their muscles have not yet developed to be able to breathe also in the upper part of the torso.When you read “belly breathing” keep one of these pictures in your mind, either the happy baby with the round, soft belly, or imagine yourself sleeping peacefully.In advanced freediving you will learn spectacular exercises to enhance the functionality of your breathing muscles. It is important to note that these exercises are only intended for your dry training, but should not be applied directly before diving.",
              image: "bellychestbreathing.png",
              title: "Belly vs. Chest Breathing",
              videoLink: ""
          },
          {
              content: "The relaxation phase is the time before your breath hold. The goal of this phase is to become completely relaxed, physically as much as mentally. Being physically relaxed means to let go of any unneeded muscle tension, while mental relaxation implies to be focused on the task at hand, to be in the here and now. Thinking uses Oxygen, so being focused also means to keep the mind from wandering.In other words, you are preparing for a breath hold by doing less and less, until you do nothing at all anymore.As your physical and mental relaxation gets deeper and deeper, you will notice that also your breathing gets calmer. The more relaxed you become, the less air you need. Your body will always breathe the exact right amount of air in and out according to the current state of activity. There is no need to interfere with that perfectly balanced mechanism. All of a sudden it becomes easy not to breathe for a moment.",
              image: "",
              title: "Relaxation Phase",
              videoLink: ""
          },
          {
              content: "Apply belly breathing at all times during the relaxation phase.",
              image: "",
              title: "Belly Breathing",
              videoLink: ""
          },
          {
              content: "It sounds simple, but it is quite a difficult task to stop the mind from thinking for more than a few brief moments. As keeping the mind from thinking is probably not possible, second best is to focus the mind: Apply a relaxation exercise.A relaxation exercise is a form of mental training, a process of a few brief moments up to several minutes where the mind is kept focused on a task that is physically relaxing. This way both goals of the relaxation phase are achieved: The mind is kept from wandering or worrying by focusing on the task at hand, and as a consequence the body in fact gets gradually more relaxed.Examples for relaxation exercises are the “Body Scan”, “Mental Torch”, “Point of Contact” or “Changing Colours of Breath”. There are literally thousands of relaxation exercises, which you can learn from your yoga teacher, the Internet, or a plethora of books. Pick a relaxation exercise and apply it several times before every breath hold. The more often you apply an exercise, the better it will work for you. After a few repetitions it feels like pressing a “relaxation button” with almost instant effect.",
              image: "",
              title: "Relaxation Exercise",
              videoLink: ""
          },
          {
              content: "Lay down on your back, hands apart, palms facing up, legs apart. Close your eyes. Imagine yourself in complete darkness. Then you find that little light and guide it to shine on the big toe of your right foot, it gets warm, heavy and soft, and you allow it to sink down towards the ground. You shine the light onto then next toe and feel how it sinks down to the ground, warm, heavy and soft. You move the light from toe to toe.. etc.”You instruct yourself through every muscle group of your body until reaching the face, especially the neck, eyelids, eyebrows, eyeballs, jaw, lips and tongue.Gently bring your mind back to the exercise when you catch it wandering or worrying. Final instruction: Feel the whole body as one.",
              image: "",
              title: "Example Relaxation Technique",
              videoLink: ""
          },
          {
              content: "The one full breath is a long and deep inhalation to fill our lungs with as much air as possible. The focus remains on relaxation. It makes not much of a difference if we can access the very last bit of our lung capacity but pay for that with the build up of a lot of tension",
              image: "",
              title: "One Full Breath",
              videoLink: ""
          },
          {
              content: "Filling the lungs completely takes time. You can try this yourself: Inhale as much air as you can in one second. You will notice that only the chest expands and you can only access a part of your lung volume. So, again, take your time. Top freedive athletes allow themselves up to one minute to fill their lungs completely. Of course you do not need to go that far, but go as slow as you comfortably can. You will notice that you will slow down even more after a few repetitions.",
              image: "",
              title: "Breathe in Slowly",
              videoLink: ""
          },
          {
              content: "As the name says, you take only one full breath. Remind yourself that your body’s saturation with Oxygen was already at its maximum even before you started your relaxation phase. Taking more breaths does not mean storing any more Oxygen – there is no space for more tea in a cup that is already full.",
              image: "",
              title: "There can be only one",
              videoLink: ""
          },
          {
              content: "Start your one full breath with an exhalation that reaches a little bit deeper than it naturally would. This way it will be easier for you to feel the air flowing deeply into your belly once you start inhaling.\n Stage one: belly breathing. Focus on your belly, feel how it is expanding softly and steadily. Take your time and keep your total relaxation. When your belly is fully expanded, then you switch to stage two. \n Stage two: chest breathing. Keep inhaling in a steady flow by expanding your chest. Keep your relaxation also in this phase and make sure that only the muscles on the side by your ribs are active. Become aware of keeping your shoulders and neck soft, while you go on inhaling into your chest until you feel comfortably full. ",
              image: "twostagebreathhold.png",
              title: "Two Stage Full Breath",
              videoLink: ""
          }, {
            content: "Remember: There is no gain in pushing in the last bit of air into your lungs if this happens at the sacrifice of your relaxation.You have finished your one full breath. Note that inhaling is a process that takes muscle activity – but holding the air in is not! You achieve this by shutting your throat, or, to be precise, you are tensing the muscles surrounding the vocal cords. If you are not sure what this means, then try this: Imagine you are lifting a heavy weight. When mobilizing all your strength you will automatically exhale and then all of a sudden lock your throat with a loud sound similar to “hhhhak!”. That action in your throat will keep the air from flowing out despite the pressure you apply by lifting the heavy weight.After finishing the one full breath, shut your throat the same way to keep the air in your lungs. This allows you to let go of any tension that you built up during inhaling. Now, as you hold your breath, return to your relaxation exercise, check for any tension and enjoy the moments of pure silence!",
            image: "twostagebreathhold.png",
            title: "Two Stage Full Breath-continued",
            videoLink: ""
        },
          {
              content: "While holding your breath in water you will always keep your air in your lungs until surfacing. This is true for every form of freediving. There are a few exceptions to that rule in advanced training, but then a freediver will always announce to the buddy that he or she will exhale. If there is no such announcement, escaping air is considered a sign for a freediver in trouble.",
              image: "",
              title: "Breath Hold",
              videoLink: ""
          },
          {
              content: "The first moments of a breath hold are very blissful and quiet - not even the sound of breathing is disturbing the silence. Put an unnoticeable smile on your face and enjoy it!If you have not yet done so, now is a good time to resume your relaxation exercise. Check your body, muscle by muscle – you might detect tension you have built up unnoticed. Let go of it, find your absolute relaxation again and keep smiling at yourself.",
              image: "",
              title: "Relaxation",
              videoLink: ""
          },
          {
              content: "Some freedivers say that this first part of their breath hold feels like a wide-open window through which they can see a beautiful landscape. After a while, this window starts to close upon them and this is the moment when we usually would breathe. The question is, why breathing?There are actually two reasons why we breathe. First, it is a habit. We are used and very well trained to breathe. Most likely the first thing that you will notice after holding your breath for a while is a thought in your head which might say something like “hang on, I used to breathe at this moment, I think it’s about time to resume that!”Secondly, you feel the build up of Carbon Dioxide (CO2) in your body. Our breathing is to a great extent regulated by the tendency to maintain a steady level of CO2 in the blood. So, when we are physically active, for example while jogging, we automatically breathe more to exhale that excess of CO2 produced by our muscles. CO2 is the waste product of any activity. The more active we are, the more CO2 we produce, and the more we breathe. To say it clearly: Breathing is largely regulated by the need to exhale excess CO2, not by the need to inhale fresh Oxygen!",
              image: "",
              title: "CO2 Build Up",
              videoLink: ""
          },
          {
            content: "This means, during a breath hold the CO2 level in our body will rise. The more relaxed we are, the slower it rises – but still it will rise. After some time it will reach a level that is noticeable to us and we get what we would call “the urge to breathe”. Holding your breath is a re-assessment of the sensation of rising CO2: For the untrained person, rising of CO2 is an imperative to breathe. For a trained freediver, it is a sensation, or, information. It does not mean that you are already low on Oxygen.Even if you have held your breath before, it is quite unlikely that you have felt or experienced a lack of Oxygen. The urge to exhale CO2 is usually much more noticeable during a breath hold. In this course you will start to create an awareness of rising CO2levels. How to deal with low O2 will be a topic in the more advanced AIDA Freediving Courses.",
            image: "co2buildup.png",
            title: "CO2 Build Up-continued",
            videoLink: ""
        },
          {
              content: "At a certain point into your breath hold you might start to feel a first contraction of parts of your breathing muscles. This is your body trying to resume to breathe to exhale the accumulated CO2. Again, it does not mean that you are low on Oxygen! Allow the contraction to happen and stay relaxed, so that the muscles can release the tension and become soft again",
              image: "",
              title: "Contractions",
              videoLink: ""
          },
          {
              content: "Relax into your contractions. You cannot and you should not try to avoid contractions but rather look at them as your internal timer for your breath hold: Maybe your first contraction will come as such a surprise that you end the breath hold right there. That is perfectly fine because now you can prove to yourself that you are fine, your lips are rosy (which is a sign of normal blood oxygenation) and you feel good. The message to yourself is this: “I feel good with one contraction – I wonder what happens next!”Now make a plan for your next breath hold. How about “first contraction and then count to ten”. So after a nice long relaxation phase you take one full breath and start your second breath hold, very relaxed and with a fantastic view out the window. Then the first contraction comes again, so you start counting, slowly and steadily. At the count of “ten” you lift your head out of the water and resume breathing. The message to yourself is now the following: “I feel good with one contraction plus counting to ten – I wonder what happens next!”So you make a new plan for the third breath hold – maybe you will count to fifteen, or twenty? Choose a number that you are comfortable with and prepare for the next round. Maybe in this round, maybe in the next one you will get your second contraction. Your contractions become your timer: You can plan your breath holds by the number of contractions. Always increase the number a little bit at a time, end the breath hold at the planned number of contractions to prove to yourself that you are fine with that number as well.Before you know it you will count up to very large numbers of contractions – they are your new best friends.",
              image: "",
              title: "Tip",
              videoLink: ""
          },
          {
              content: "By this time you have already figured out that holding your breath is less of a physical and more of a mental challenge. Your mind is simply not used to not breathing. Despite better knowledge, your mind will come up with all sorts of reasons and excuses why you cannot go on holding your breath right now. It is maybe because you are not perfectly relaxed, or your one full breath was not actually that full, or today is a bad day in general. Whatever reasons your mind comes up with in order to stop that breath hold right now; convince yourself that you can deal with it despite all your thoughts or opinions about the current situation. The fact that your mind will try to convince you that you need to breathe right now imposes a very interesting question: Who is in charge – your mind or you?Without going too deep into that fundamental philosophical question: You are in charge and it is your decision when to end a breath hold. It is fair to say that this is a game that you play with your mind. When thoughts pop up in your mind, look at them as an unattached observer and let them pass. Just like you are looking at clouds, how they form, change shape and disappear without your involvement. This is the mind game of holding your breath. ",
              image: "",
              title: "Mind Game",
              videoLink: ""
          },
          {
              content: "Tip: Not to think is not easy, so try feeding your mind with positive thoughts. While holding your breath, create your personal happy place. Maybe this is a childhood memory, a fantasy, or even a real place that you have visited recently: Recreate that place in your mind as realistically as possible, count the steps, smell the scents of the flowers, hear the voices of people that might be around.Tip: Use the sounds that are actually there, in the pool or confined water, while you hold your breath. Build these noises into your happy place: A propeller of a boat nearby becomes a beautiful bird that you can see dancing in the air, or the sound of the pool’s water pump becomes a cable car, lifting you up to the top of a mountain.",
              image: "",
              title: "Tip",
              videoLink: "https://player.vimeo.com/video/98248368?h=b07c483b47"
          },
          {
              content: "As we learned earlier, your breath hold does not end when you surface; it ends when you have resumed breathing",
              image: "",
              title: "Recovery Breathing",
              videoLink: ""
          },
          {
              content: "Recovery breathing is a safety concept. It is the technique how to breathe in order to properly finish a breath hold. What you need now is to inhale fresh Oxygen. Make it a habit to end every breath hold with recovery breathing!And this is why: As you progress and train as a freediver, it may happen that you surface from a dive and have pushed it a bit too far which means that you are actually low on Oxygen. In such a situation, rational thinking does not happen anymore, you will simply do what you trained your body to do – recovery breathing. This is the reason why recovery breathing is an integral component of every dive: You train your body that every breath hold – be it a dive at the surface or to depth – ends with recovery breaths. Once you get into that low-Oxygen situation and your rational thinking comes to a halt, your body will automatically do what you trained it to do: Recovery breathing to restore the gas levels in your body to normal in the shortest possible time!",
              image: "",
              title: "Safety Concept",
              videoLink: ""
          },
          {
              content: "As you always surface with all your air still in your lungs – remember, a freediver never exhales during the dive – the first exhalation is nothing more than opening your airways and letting the air flow out from your lungs.",
              image: "",
              title: "Relaxed Passive Half Exhalation",
              videoLink: ""
          },
          {
              content: "After the passive exhalation, a quick inhalation follows, just as if you would say “hope” on a big inhale. This quick inhalation will not fill up your lung completely, but a big enough quantity of fresh air will enter your body.This “hope” inhalation is followed by another passive exhalation – just let the air flow out from your lungs again.",
              image: "",
              title: "Quick Full Inhalations",
              videoLink: ""
          },
          {
              content: "Repeat this sequence of quick inhalations and passive exhalations at least three times. Do more of them if you feel like it.Recovery breathing is a very active way of breathing with big breaths and lots of noise. Of course when you do that for example right now, it might make you dizzy, as you are breathing way too much air in and out. But after a breath hold, the situation is a different one as you are high on CO2 and low on Oxygen. Recovery breathing is the best way to reset these levels in the fastest and safest way.",
              image: "",
              title: "Repeat 3 Times",
              videoLink: ""
          },
          {
              content: "It is perfectly ok for you to do this full breath hold cycle – relaxation, one full breath, breath hold and recovery breathing – while laying down on your bed. The more often you do it, the better. Make sure that the relaxation phase takes at least two minutes between two breath holds.There are many breathing exercises available, offering different sets of rules for training purposes. You will learn about these in the AIDA3 and AIDA4 Courses. ",
              image: "",
              title: "Dry Breathing Exercises",
              videoLink: ""
          }
      ],
      title: "FREEDIVE BREATHING CYCLE"
  }, {
      completed: false,
      innerModules: [
          {
              content: "",
              image: "",
              title: "The Respiratory System (Video)",
              videoLink: "https://player.vimeo.com/video/98246632?h=a5190326ef"
          },
          {
              content: "The first stage of the airflow into our body is the nose and the mouth. In general it is good advice to breathe through the nose, however, in freediving the breathing happens mostly through the mouth. In most cases you will wear a mask or a nose clip to keep water from entering your nose, thus, making it necessary to breathe through your mouth. After passing the mouth the inhaled air travels through the windpipe or the trachea, which is a fairly rigid tube made of smooth muscle and several c-shaped rings of cartilage. At its lower end, the trachea divides into two main bronchi.The bronchi are structurally similar to the trachea, but are the first part of the lungs, or what is also called the bronchial tree. Through several stages the bronchi branch off into tiny bronchioles from which we have about 30’000 in each lung. At the end of the branches lie the alveoli where the gas exchange in the lungs takes place. They can be considered as the millions of leaves of the (bronchial) tree. ",
              image: "",
              title: "Elements of the Respiratory System",
              videoLink: ""
          },
          {
              content: "The gas exchange in the alveoli has two main purposes: Absorbing Oxygen (O2) and releasing excess Carbon Dioxide (CO2).For every action in the body Oxygen is needed. Bodily functions are fueled from stored forms of energy, but it takes Oxygen to replenish these energy reservoirs. With every inhalation we allow fresh air to enter our lungs, carrying a good amount of Oxygen.Almost every action in the body creates Carbon Dioxide as a waste product. Every muscle that we move, every thought that we think, every image that we create, everything we hear, see, taste or touch creates activity in the brain, which in turn creates CO2. With every exhalation, we get rid of a certain amount of excess Carbon Dioxide accumulated in our body",
              image: "",
              title: "Gas Exchange",
              videoLink: ""
          },
          {
              content: "",
              image: "circulatorysystem.png",
              title: "The Circulatory System",
              videoLink: "https://player.vimeo.com/video/98246631?h=295c713017"
          },
          {
              content: "The circulatory system of the blood is made of two loops. The systemic circulation delivers Oxygen to all tissues in the body, and returns excess Carbon Dioxide back to the heart. The pulmonary circulation delivers this excess CO2 to the lungs where it can be exhaled. With the next inhalation, Oxygen is collected and then carried back towards the heart, where the blood enters the first circulation again.",
              image: "",
              title: "Two Cycles: Lungs and Body",
              videoLink: ""
          },
          {
              content: "Every red blood cell carries the protein hemoglobin, which bonds with Oxygen. The total amount of Oxygen carried by our body at any time is thus:O2 stored in the air in the lungs plus the O2 stored in the blood",
              image: "",
              title: "O2 Bonded with Haemoglobin",
              videoLink: ""
          },
          {
              content: "CO2 gets transported dissolved in the blood plasma. This is similar to gas dissolved in soda water. ",
              image: "",
              title: "CO2 Dissolved in Blood Plasma",
              videoLink: ""
          },
          {
              content: "",
              image: "mechanicsofbreathing.png",
              title: "The Mechanics of Breathing (Video)",
              videoLink: "https://player.vimeo.com/video/98246630?h=cca0e3775a"
          },
          {
              content: "The main breathing muscle is the diaphragm. This large muscle separates the upper thoracic cavity from the lower abdominal cavity. As the diaphragm contracts, the thoracic cavity increases in volume and air flows into the lungs. At the same time the volume below the diaphragm gets compressed which looks like the belly is getting inflated. This is why abdominal breathing (breathing by just using the diaphragm) is also called “belly breathing”. The belly looks like it is inflating and deflating, even though there is no air flowing into it of course.",
              image: "",
              title: "Diaphragm",
              videoLink: ""
          },
          {
              content: "Breathing – especially filling the lungs completely – is supported by the action of the intercostal muscles and other accessory breathing muscles. These are groups of muscles that expand and shrink the chest cavity and thus help to fill or empty the lungs.A combination of diaphragmatic and thoracic breathing will allow you to access a great majority of your lung volume in a simple and very effective way. Your instructor will teach you “two stage breathing” in order to access your diaphragm first, and then fill up your lungs by activating the intercostal muscles. This is referred to as the one full breath, which you take before you hold your breath",
              image: "",
              title: "Intercostal Muscles and Accessory Breathing Muscles",
              videoLink: ""
          },
          {
              content: "While the process of inhaling is active, exhalation is mainly passive. Exhaling simply happens by relaxing muscles involved in breathing. This allows the diaphragm to move upwards towards the thorax and thus pushes the air effortlessly out from the lungs. Also, once the (external) intercostal muscles are relaxed, they will return to their resting position and also push air out from the lungs.Inhaling efficiently is a skill to be learned, while exhaling is more about just 'letting go'",
              image: "",
              title: "Inhale - Active, Exhale - Passive",
              videoLink: ""
          },

          {
              content: "All physical and mental activity creates CO2. This Carbon Dioxide gets dissolved in the blood plasma and is transported back towards the lungs where it will be exhaled with the next breath. While being dissolved in the blood plasma, CO2 raises the acidity of the blood (= lowering the pH of the blood). This change of acidity is then registered by chemoreceptors in the brain stem, and further in the aortic and carotid bodies. Once registered it automatically initiates an increase of breathing volume and frequency to offload the surplus of CO2.For example, when you are jogging you produce more CO2 than when resting. This surplus of CO2 gets dissolved in the blood, lowering its pH level slightly. After the blood has been pumped around your body it will eventually reach your brain stem. Once this slight change in pH is registered you will automatically start breathing more deeply and at a higher frequency. The body starts to maintain the neutral level of CO2 by exhaling a bigger volume of air",
              image: "",
              title: "Neutral Level of CO2",
              videoLink: ""
          },
          {
            content: "Once you stop jogging, the breathing will slowly calm down and finally reach its normal rhythm when the CO2 in the blood has returned to its neutral level.An important note before we start: If you hold your breath in water you always need to have a trained buddy watching over you. There is no exception to this rule. But it is safe to do breath holds alone “in the dry”, for example while resting flat on your back.",
            image: "",
            title: "Neutral Level of CO2-continued",
            videoLink: ""
        },
          {
              content: "For a healthy person that has not undergone breath hold training it is not possible to stop breathing for a very long time. Lie down on your bed and try for yourself. Even fully relaxed you produce a certain amount of CO2 in your body. Now that you have stopped breathing and thus have also stopped exhaling this surplus of CO2 you will see that the CO2 level in your blood will soon trigger what is commonly called the “urge to breathe”. If you choose to still go on a few moments longer with your breath hold, the CO2 rises past the level that your body and mind can tolerate. That is when the “urge to breathe” gets irresistible.What is commonly called the “urge to breathe” is mainly information about the current CO2 level in our body. Once you have started training your breath hold with your AIDA Instructor, you will experience that the signs of rising CO2 are not an absolute imperative to resume breathing as quickly as possible. You will learn that rising CO2 in your blood is a sign that can be interpreted but not necessarily needs you to resume breathing automatically. ",
              image: "",
              title: "Triggered by CO2 not O2",
              videoLink: ""
          }, {
            content: "Learning more about the role of CO2 in our body leads us to an important conclusion: Our breathing is regulated mainly by CO2 and to a smaller extent by Oxygen. To some degree our body has means to detect the current level of Oxygen, however in recreational freediving we make use of the signals occurring due to a rising CO2level. Experienced recreational freedivers end a breath hold long before suffering from low Oxygen levels by “reading” the signals of rising CO2 and draw correct conclusions from that.",
            image: "",
            title: "Triggered by CO2 not O2-continued",
            videoLink: ""
        },
          {
              content: "Breathing is a habit. Your body is well trained to maintain its neutral level of CO2 and to react on the slightest change of blood acidity by altering the breathing volume. In a breath hold, you still register these changes of blood acidity, but choose not to react to them immediately. The physical reaction on rising CO2 might be a burning sensation, or tightness in your chest or throat. This can be due to muscular tension that you build up during the breath hold, but it can also be a messenger of an upcoming contraction. After some breath hold time, the level of Carbon Dioxide in your blood will be high enough that the body tries to exhale it by contracting and releasing muscles related to breathing. These contractions do not mean that you need to breathe right now. As already mentioned, they are mere information. Contractions are a very individual experience. Some freedivers describe them as relaxing and easy to handle, while others say that they are so strong that they hardly can keep the air in their lungs. For some, the contractions appear as far apart as 30 seconds, while others get rocked by pulsating, almost continuous patterns of contractions. ",
              image: "physicalaspectscontractions.png",
              title: "Physical aspects: Contractions",
              videoLink: ""
          },
          {
              content: "No matter how your personal experience of contractions is, the most productive reaction to it is to relax. The less tension you allow to build up in your body, the easier the contractions will pass by. Even though CO2 in very high doses works as a narcotic, the levels as we experience them in recreational freediving do not harm our bodies. Besides a raised breathing volume and contractions, another symptom of elevated CO2 can be headache. While this is certainly not a comfortable experience, there is no indication so far that this is dangerous. The headache will disappear after regaining normal breathing",
              image: "",
              title: "Physical aspects: Contractions-continued",
              videoLink: ""
          },
          {
              content: "As much as the duration of a breath hold is limited by physical aspects it is also a mental challenge.The less we think, the less cerebral activity occurs leading to less Oxygen used and less CO2 produced. The ultimate state of mind for a breath hold is to allow it to go blank. Unfortunately our mind is not very good at doing nothing. The goal in a breath hold is to keep the mind from unneeded tasks; mainly from worrying. After all, you know that everything is alright. You did not get any contractions yet and you have been to this length of a breath hold already many times before. So your task is to convince yourself that you are ok and that you can go on with your breath hold. ",
              image: "",
              title: "Mental aspects",
              videoLink: ""
          },
          {
              content: "Focus on the one important thing: Relaxation. Continue with your relaxation exercise while holding your breath (see “relaxation phase”). Applying relaxation exercises gives your mind a task to perform and it will easily be possible to detect physical tension built up during the breath hold. Let go of it and enjoy your breath hold for a few more moments. When your mind goes wandering again, bring it gently back to the one task at hand – relax and reward yourself with a little smile for staying in control.",
              image: "",
              title: "Tip",
              videoLink: ""
          },
          {
            content: "Some freedivers say that breath holding is “meditation with feedback” or also “meditation without cheating”. There is a certain true aspect in these statements. If your mind keeps spinning and you cannot hold it back from losing focus or even worse, worrying, you are literally “losing your mind”. You are more likely to end your breath hold quite quickly.",
            image: "",
            title: "Mental aspects-continued",
            videoLink: ""
        },
          {
              content: "Experienced freedivers use their contractions as a timer. Counting contractions gives them an indicator of how far they have already gone into their breath hold. For example, if a freediver ended his last breath hold after four contractions to resume breathing without any problems, then it is a safe assumption for him/her that he/she can go to one or two contractions more in his next breath hold without jeopardizing his or her Oxygen levels.You can think of it as driving an old car: You cannot see how much gasoline you still have in the tank (Oxygen), but you can deduct from what the needle on the fuel gauge says (CO2) how much there must be left. The more often you drive that car, the more precisely you know how to interpret the readings on the gauge. Every breath hold leaves another mark on your CO2 gauge; marks that give you confidence to end your breath hold well in time.",
              image: "O2gasintank.png",
              title: "O2 = Gas in the tank, CO2 = Gauge in the cockpit",
              videoLink: ""
          },
          {
              content: "Simply defined, hyperventilation is in- and exhaling more air than you need to maintain a neutral level of CO2 in your blood.Of course this definition depends greatly on your current state of activity. In a relaxation exercise while lying on your bed you are barely producing CO2, whereas in a 400m sprint you produce such big amounts that your breathing cannot catch up with exhaling enough of it. In the first case any audible breath would already considered to be hyperventilation, while it is not possible to hyperventilate during the 400m run",
              image: "hyperventilation.png",
              title: "Hyperventilation",
              videoLink: ""
          },
          {
              content: "With an Oximeter the Oxygen saturation of your blood can be measured by attaching it to your finger. At at any given time your blood is saturated with Oxygen levels at around 96-99%. If you are significantly below that reading you are either exerted and need to rest or you are sick and should consult a doctor.You can prove to not be able to increase the readings by hyperventilating with the Oximeter still on your finger. The reading remains more or less steady. You cannot put more tea in a cup that is already full. Sometimes the blood saturation with Oxygen might increase by one percent, but at a great cost: You have to literally over-exert yourself with breathing! After all, hyperventilation does not store more Oxygen in your blood! ",
              image: "",
              title: "No additional O2 storage",
              videoLink: ""
          },
          {
              content: "In the breath hold exercise mentioned earlier it was not possible to do extend the breath hold indefinitely because of the rising level of CO2. But by hyperventilating before the experiment it is possible that you pass out from low Oxygen levels without even feeling the first signal of rising CO2. Hyperventilation can postpone the signals of rising CO2 to such an extent! Hyperventilation does not store more Oxygen, it actually lowers the level of CO2. If you pass out while your face is submerged, you will not unconsciously inhale water, but simply die after a few minutes. Only a buddy watching over you at all times and performing a timely rescue if needed will save you from this ill fate. This is the main reason why hyperventilating before freediving is so dangerous. Apart from the potentially fatal danger, hyperventilation has other disadvantages for breath holding. Hyperventilation raises the heart rate, which goes against the goal of starting a breath hold in the most relaxed state as possible. Hyperventilation also reduces the blood flow to the brain while increasing it towards the extremities. Once you have started your breath hold, your body will need to reverse this process to conserve Oxygen (see the chapter about the “Mammalian Dive Response” in AIDA4). In short, in a breath hold after hyperventilation, your body will not conserve Oxygen as much as it potentially could and is thus using up its Oxygen reserves faster. You can black out earlier than you would have in a completely relaxed state.",
              image: "",
              title: "Negative effects of hyperventilation",
              videoLink: ""
          },
          {
              content: "It is thus important to know and carefully watch out for the symptoms of hyperventilation. If you experience any of these symptoms, do not dive and resume your relaxation exercise until they go away. It is also quite easy to point out if your buddy is hyperventilating by listening to his breathing sound. If you can clearly hear the breathing of a freediver at the tip of his or her snorkel, remind your buddy to relax and extend the relaxation phase until the sound disappears",
              image: "symptomshyperventilation.png",
              title: "Symptoms of hyperventilation",
              videoLink: ""
          },
          {
              content: "There are ways of prolonging breath holds without compromising your safety.",
              image: "safelyprolongdives.png",
              title: "Safely Prolong Dives",
              videoLink: ""
          },
          {
              content: "The more often you hold your breath, the more used you will get to rising CO2 levels, mentally as much as physically. The more tolerant to CO2 you get, the longer you can hold your breath. This is where your CO2 tolerance training starts.You will still notice rising CO2, but you will learn to apply a new interpretation. Rising CO2 becomes mere information about the status of your breath hold and it gradually loses the imperative to breathe immediately.Specific CO2 tolerance training will be a topic in your AIDA3 Course.",
              image: "",
              title: "CO2 tolerance",
              videoLink: ""
          },
          {
              content: "Relaxation technique is a major key to modern freediving. Relaxation is a skill that can be learned and needs to be trained. The better you become at it, the more effective it will become. In the beginning it might take a bit of patience to find relaxation, but after a few dozen times of applying a given relaxation technique you will be able to “switch off” almost instantly. The better you get at relaxing, the less Oxygen you will use and the less CO2 you will produce. This allows for increasingly longer breath holds.It takes training, it takes time, but results will come and you will always be safe.Once you start moving under water, the goal is to do this with as little effort as possible. Efficiency in movements is less a question of specialized gear but one of perfect technique.",
              image: "",
              title: "Relaxation & Efficiency",
              videoLink: ""
          }
      ],
      title: "BASIC PHYSIOLOGY OF FREEDIVING"
  }, {
      completed: false,
      innerModules: [
          {
              content: "",
              image: "",
              title: "Pressure: Builds up with depth",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Sensing pressure, but not pain",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Air Spaces: Ears-Sinuses-Mask",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Lungs",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Equalisation Technique",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Valsalva manoeuvre",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Frenzel technique",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Practice equalisation",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Other techniques",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Facilitate Equalisation: Clean Technique",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Outer ear filled with water",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Equalise frequently enough",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Slow down",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Dive healthy",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Avoid decongestant medication",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Stretching before divin",
              videoLink: ""
          }
      ],
      title: "EQUALISATION"
  }, {
      completed: false,
      innerModules: [
          {
              content: "",
              image: "",
              title: "Importance of technique",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Duck dive",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Duck dive sequence",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Elegance is efficient",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Many possible techniques",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Finning technique: Action starts from the hips",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Legs straight to the point of the toes",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Wide, strong and steady kick",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Minimum effort",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Equalise frequently",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Stay relaxed",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "The Turn",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Extend one arm",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Grab to stop",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Forward tumble turn",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Pull the line to start ascent",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "The Ascent: Resembles the descent",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "No turning",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Use of buoyancy",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Surface and Recovery: Keep your air",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Grab the float",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Recovery Breathing",
              videoLink: ""
          }
      ],
      title: "FREEDIVE TECHNIQUE"
  }, {
      completed: false,
      innerModules: [
          {
              content: "",
              image: "",
              title: "The Buddy System",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "First level of safety: You!",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Second Level: The buddy team",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Take buddying as seriously as your own dives",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Communication in a buddy team",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Forms of buddying",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Static Buddying",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Safety check",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Tip",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Buddy Team Plan",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Reliability",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Signs of a freediver in need of help",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Change of finning style",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Unfocused Eyes",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Grabbing the Rope",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Speeding Up",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Escaping Air",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Inability to keep the head above water",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Anything Abnormal",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "If you think you should act \u2013 act!",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Loss of Motor Control (LMC)",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Jerky movements of limbs and head",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Last warning signal",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Stop diving for the day",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Find out why it happened",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Blackout (BO): Loss of consciousness",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Hypoxia",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Symptoms of an oncoming blackout",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Ear ringing",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Feeling of warmth",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "The dive starts to feel easier",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Tunnel vision",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Fuzzy thoughts",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Tingling sensation",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Brain damage?",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Stop diving for the day",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Find out why it happened",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Rescue a Freediver: Support in LMC",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Rescue of a blackout: The SAFE-rule",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Surface",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Airways",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Facial Equipment",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Blow \u2013 Tap \u2013 Talk (BTT-Cycle)",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "BTT-Cycle",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Risk Reduction",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Relaxation",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Conservative Freediving",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Apply Good Technique",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Recovery Breathing",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Hydration",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Always freedive with a trained buddy",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Correct weighting",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Snorkel out",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Rescue technique practice",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Lanyard",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Freediving and Scuba",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "No Fly Sign",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Freediving after SCUBA diving",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Scuba diving after freediving",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Do not accept air from a scuba diver",
              videoLink: ""
          }
      ],
      title: "SAFETY IN FREEDIVING"
  },{
      completed: false,
      innerModules: [
          {
              content: "",
              image: "",
              title: "Introduction",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Delicate material",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Mask: Enclose Nose",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Assure good fit",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Low volume",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Clear lenses",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Flexibility",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Taking care",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Bi-fins",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Length = Power",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Techniques and training",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Full foot",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Plastic \u2013 fibre glass \u2013 carbon",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Taking care",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Monofin",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Snorkel",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Rigid",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "With/without purge",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Remove before diving",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Attached to the mask?",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Weight belt",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Worn on Hips",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Small Weights",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Quick release",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Seals suit",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Taking care",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Wetsuit: Protection from cold and sun",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Different thickness",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Close fit",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Full body",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "No Zipper",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Mobility",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Fragile",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Lanyard: Attaching to the dive line",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "To keep the bearings",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "For rescue purposes with a counterweight",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Quick release at the wrist",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Freedive Buoy",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Safety Feature",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Dive line firmly attached",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Tethering line",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Carabiners",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Handles to hold on to",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Tennis ball to stop lanyard",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Bottom plate",
              videoLink: ""
          }
      ],
      title: "EQUIPMENT FOR FREEDIVING"
  },{
      completed: false,
      innerModules: [
          {
              content: "",
              image: "",
              title: "Introduction",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Static Apnea (STA) [Video]",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Breath hold face down in water",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Most accessible training form",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Mind game",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Contractions",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Dynamic Apnea (DYN, DNF) [Video]",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Horizontal distance covered on one breath",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Dynamic with fins: DYN",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Dynamic no fins: DNF",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Important training discipline",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Lifeguard is NOT a buddy",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Free Immersion (FIM): Pulling yourself down and back up a line",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Constant Weight (CWT, CNF): Swim down and back up using the same amount of weight",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Constant weight with fins: CWT",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Constant weight no fins: CNF",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Grab the rope only to turn",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Variable Weight (VWT)",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Descend with weight or sled",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Ascend without weights",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Ascend swimming and/or pulling on the",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Non Competition Discipline",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "No Limits (NLT)",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "No Competition Discipline",
              videoLink: ""
          }
      ],
      title: "FREEDIVING DISCIPLINES"
  },{
      completed: false,
      innerModules: [
          {
              content: "",
              image: "",
              title: "Mind your surroundings",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Mind your long fins",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Mind Marine Life",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Do not remove anything from the sea / Do not leave anything in the sea",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Mind the dive site",
              videoLink: ""
          },
          {
              content: "",
              image: "",
              title: "Be a role model",
              videoLink: ""
          }
      ],
      title: "FREEDIVER CODE OF CONDUCT"
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

import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const out = path.join(root, 'TeacherSims', 'data', 'nsw-2023', 'stage-4', '7-1-observing-the-universe.json');

const rows = (text) => text.trim().split('\n').map(line => {
  const [statement, explanation, think] = line.split(' | ');
  return { statement, explanation, think };
});

const sections = [
  {id:'nature-of-science',label:'Nature of science',statements:[
    ['purpose-of-science','Discuss that the purpose of science is to build knowledge and understanding of the world and the Universe through observation, experimentation and analysis',rows(`
Science begins by noticing what happens in the world around us. | Observations identify objects, events, changes and patterns that may need explanation. They may be qualitative descriptions or quantitative measurements and often start an investigation. | What night-sky observation could lead to a scientific question?
An observation tells what happened; an explanation tries to tell why. | Scientists separate evidence from interpretation. A changing shadow is an observation; explaining it using the apparent position of the Sun requires reasoning. | Why must scientists distinguish observation from explanation?
Experiments allow scientists to test ideas rather than simply argue about them. | An experiment deliberately changes or compares conditions and collects evidence. Results can support an explanation, challenge it or prompt another investigation. | Why is tested evidence stronger than an idea that merely sounds reasonable?
Scientific knowledge is built from evidence, not from what scientists want to be true. | Expectations do not decide a result. Unexpected evidence can be especially useful because it may expose a weak assumption or incomplete explanation. | What should a scientist do when evidence disagrees with a prediction?
Analysis turns measurements into scientific meaning. | Scientists organise, graph and compare data to find patterns and relationships. A list of measurements does not become evidence for a conclusion until it is interpreted appropriately. | Why are hundreds of unanalysed numbers not enough?
Science often progresses through observing, questioning, testing and reconsidering. | Investigation is not always a straight sequence. A result may create a new question, require a changed method or lead to a revised explanation. | Why might evidence send scientists back to an earlier step?
Science can investigate things humans cannot directly touch. | Astronomers analyse radiation, motion and other indirect evidence from objects they cannot visit. Indirect evidence is useful when its source and limitations are understood. | What makes indirect evidence scientifically trustworthy?
One experiment rarely answers every scientific question. | Each method has limits and usually investigates only part of a larger problem. Understanding strengthens when evidence from multiple suitable studies agrees. | Why might one idea need several kinds of investigation?
Scientific knowledge becomes stronger when independent lines of evidence agree. | Agreement among observations, experiments and measurements reduces the chance that a conclusion rests on one error or one unusual result. | What should scientists do when different lines of evidence disagree?
Science does not merely collect facts; it builds explanations. | Models, laws and theories connect observations and allow scientists to explain natural phenomena and make testable predictions. | How does knowing a fact differ from understanding it?`)],
    ['branches-and-connections','Recognise how scientific knowledge can be represented in branches of biology, chemistry, physics and geology, and consider how modern scientific knowledge is interdisciplinary and transdisciplinary',rows(`
Biology investigates living things, but living things also obey chemistry and physics. | Scientific branches organise knowledge; nature itself has no subject boundaries. Understanding a heart involves cells, chemical reactions, fluid motion and forces. | How can studying a heart involve three branches of science?
Chemistry investigates substances, their properties and their changes. | Chemical ideas explain processes from digestion and batteries to planetary atmospheres and the spectra of stars. | How can chemistry contribute to astronomy?
Physics investigates matter, energy, forces and interactions. | Physics explains motion, gravity, electricity, radiation and waves, and these ideas operate throughout biology, chemistry, geology and astronomy. | Where is physics used in biology?
Geology reads Earth's history from materials, structures and landscapes. | Evidence in rocks reveals environments, plate movement, impacts and the history of life, linking geology closely with chemistry and biology. | Why does studying a fossil require both geology and biology?
Scientific branches are useful labels, not walls. | Categories help people learn and specialise, but many worthwhile questions cross several branches. | Which branches contribute to understanding climate change?
Interdisciplinary science combines knowledge and methods from different fields. | A team can bring specialised perspectives to one problem, such as geologists, chemists and physicists interpreting Mars-rover data. | What would each specialist contribute to a Mars mission?
Modern scientific problems are often too complex for one discipline. | Disease, climate, ecosystems and space exploration involve interacting biological, chemical, physical and Earth systems. | What experts could help investigate bushfire behaviour?
Astronomy is strongly interdisciplinary. | Astronomers use physics for gravity and radiation, chemistry for composition, geology for planets and biology when considering conditions for life. | What astronomical question could each branch help answer?
Transdisciplinary research reaches beyond traditional science disciplines. | Some problems require engineering, mathematics, computing, social science, communities and Cultural Knowledge as well as natural science. | Why might an environmental solution need community knowledge?
The branch of science depends partly on the question being asked. | The same object can be studied from multiple perspectives: water has chemical composition, physical behaviour, biological roles and geological action. | What two questions could different branches ask about water?`)],
    ['collaborative-science','Explore why scientific research is usually collaborative and builds on the work of others',rows(`
Most modern scientific discoveries are team efforts. | Research may require several skills, large datasets, specialised instruments and years of work. Teams combine expertise that one person rarely possesses. | Why can a space telescope require thousands of contributors?
Scientists rarely start from zero. | Researchers read existing studies and use established knowledge, methods and technology before asking what remains uncertain. | Why should earlier research be studied first?
Sharing results allows other scientists to build on them. | Published methods and evidence generate new questions, tests and applications, allowing scientific knowledge to accumulate. | What would happen if every result stayed secret?
Different scientists can notice different things in the same evidence. | Collaboration brings varied experience and expertise; one person may recognise a pattern or limitation another misses. | How can diversity improve a research team?
Large scientific instruments are often shared internationally. | Major telescopes, accelerators and missions are expensive and complex, so countries share costs, expertise, observing time and data. | What advantages does international astronomy bring?
Repeating another scientist's work can strengthen knowledge. | Independent replication tests whether a result can be reproduced with new people, instruments or conditions. | Why is replication not a waste of time?
Evidence-focused disagreement can improve science. | Researchers challenge methods and interpretations. Constructive criticism can reveal weaknesses and lead to stronger explanations. | When is disagreement scientifically productive?
Scientists depend on people outside their own speciality. | Astronomers may need engineers, software developers, statisticians, technicians and knowledge holders to collect and interpret evidence. | Who would you include on a Mars-rover team?
Scientific references show where ideas and evidence originated. | Citation acknowledges prior work and lets readers trace and evaluate the foundation of a claim. | Why is unacknowledged copying harmful to science?
Scientific knowledge grows like a network, not a single straight line. | Studies connect, confirm, revise and sometimes contradict one another. Progress emerges from this shared body of work. | How could a failed study still help later researchers?`)],
    ['theories-and-laws','Identify that scientific theories and laws are based on repeated experiments and observations that describe or predict a range of natural phenomena',rows(`
A scientific theory is a well-supported explanation, not a guess. | Theories connect extensive evidence to explain how or why a broad range of phenomena occurs and must remain testable. | How is a scientific theory different from an everyday hunch?
A scientific law describes a consistent relationship in nature. | Laws often summarise what happens, sometimes mathematically, across a defined range of conditions. | Does a law automatically explain why the pattern occurs?
Theories do not become laws when enough evidence accumulates. | Theories and laws have different jobs: theories explain while laws describe regular relationships. One is not a promotion of the other. | Why is the phrase “only a theory” misleading?
Repeated observations make patterns more convincing. | A relationship seen many times, by different observers and under varied conditions, is less likely to be an accident. | Can repetition remove every source of error?
Scientific predictions create opportunities to test ideas. | A useful theory or law tells scientists what evidence should be observed under stated conditions. Failed predictions prompt checking and possible revision. | Why is a testable prediction valuable?
Newton's law of gravitation describes attraction across the Solar System. | Its mathematical relationship successfully predicts many motions, while broader theories explain gravity differently and extend predictions to other conditions. | How can a law remain useful when a newer theory exists?
Evidence defines the conditions within which a law applies. | Scientific laws are not commands to nature; they are descriptions supported within tested ranges and may need qualification in extreme conditions. | Why should scientists state a model's limits?
One confirming result is not enough for a broad theory. | Strong theories draw support from repeated observations, experiments and independent lines of evidence. | What makes evidence extensive rather than merely repeated?
Theories can be refined without science having failed. | Better evidence or technology can reveal limits and produce a more accurate explanation. Revision is a strength of evidence-based knowledge. | Why might an old theory still be taught?
Both theories and laws help scientists predict natural phenomena. | Their predictions guide observation, engineering and further tests, but confidence depends on evidence and appropriate conditions. | What should happen after a prediction fails?`)]
  ]},
  {id:'practice-of-science',label:'Practice of science',statements:[
    ['working-scientifically-processes','Identify that the practice of science involves using the Working scientifically processes',rows(`
Working scientifically begins with careful observation. | Senses and instruments provide evidence that can prompt questions, comparisons and measurements. | What makes an observation useful for investigation?
Good scientific questions can be investigated with evidence. | A focused question identifies what will be observed, compared or changed and avoids requiring only an opinion. | How could a broad space question be turned into a testable one?
Predictions should be connected to evidence or a model. | A prediction states an expected result and gives an investigation something specific to test. | What makes a prediction scientifically useful?
Planning makes an investigation safer and more valid. | Scientists decide variables, equipment, measurements, repeats and risk controls before collecting data. | Which planning choice most affects validity?
Following a method carefully makes results easier to interpret. | Unrecorded changes to a procedure can introduce alternative explanations for a result. | When should a method be changed?
Processing data reveals information hidden in raw results. | Tables, calculations and graphs organise measurements so comparisons and patterns become visible. | Which representation best shows change over time?
Analysis connects patterns in data to conclusions. | Scientists judge whether evidence supports a claim while considering variation, anomalies and limitations. | Why must a conclusion refer to data?
Problem-solving in science involves testing possible solutions. | Constraints, criteria and evidence help scientists choose and improve a strategy. | How could a solution be evaluated fairly?
Communication is part of doing science. | Clear diagrams, tables, reports and explanations allow evidence and reasoning to be checked and used by others. | Why should units and labels be included?
Working scientifically processes are connected, not a rigid recipe. | New data can create new questions, change a plan or require another observation. Scientists move between processes as evidence demands. | Why is scientific inquiry often iterative?`)],
    ['measurement-tools','Use a variety of analog and digital measuring devices in scientific investigations to compare the range, sensitivity and accuracy of observations provided by those instruments',rows(`
An instrument's range sets the smallest and largest values it can measure. | A device chosen outside its range may overload, give no reading or conceal useful variation. | Which instrument range would suit a 25 mL volume?
Sensitivity is the ability to respond to small changes. | A sensitive sensor can show slight variation that a coarse scale misses, although sensitivity alone does not guarantee accuracy. | When is extra sensitivity useful?
Accuracy describes closeness to an accepted or true value. | Calibration and correct technique help reduce systematic error and improve accuracy. | How could you check a thermometer's accuracy?
Precision describes the closeness of repeated measurements. | Closely grouped readings can be precise even when all are shifted from the true value by systematic error. | Can data be precise but inaccurate?
Analog scales must be read between marked divisions with care. | Eye position, scale spacing and estimating between graduations affect the recorded value and uncertainty. | How does parallax affect a reading?
Digital displays are easy to read but are not automatically accurate. | Resolution, calibration, response time and range still limit a digital sensor. Extra digits can create false confidence. | Do more decimal places prove accuracy?
The best instrument is matched to the measurement task. | A laboratory balance and bathroom scale measure mass over different ranges and with different sensitivities. | Which would you use for 2.4 g and why?
Calibration compares an instrument with a known reference. | It can reveal an offset or scale error and allows readings to be adjusted or the device replaced. | Why should instruments be calibrated regularly?
Measurement uncertainty should match the instrument. | Reporting many digits beyond the scale or resolution suggests knowledge the instrument did not provide. | How many digits should a ruler measurement include?
Comparing instruments requires measurements of the same quantity under the same conditions. | A fair comparison separates differences between devices from changes in the object being measured. | How would you compare two temperature sensors?`)],
    ['senses-versus-equipment','Compare and contrast the accuracy and reliability of observations made using the senses with those obtained using measuring equipment',rows(`
Human senses are valuable but mostly qualitative. | Senses quickly detect colour, sound, texture and change, but they rarely provide standard numerical measurements. | When is a sensory observation sufficient?
Scientific instruments extend the range of human senses. | Telescopes, microscopes and detectors reveal objects, scales and wavelengths that unaided people cannot perceive. | What can a radio telescope detect that eyes cannot?
People may describe the same sensation differently. | Perception depends on context and the observer, reducing reliability when a standard comparison is needed. | Why is “warm” weaker evidence than a temperature?
Measuring equipment uses agreed units. | Standard units let results be compared across observers, places and times. Without them, an apparently precise number can still be ambiguous. | Why are shared units essential for collaboration?
Instruments can also make errors. | Poor calibration, wrong range, slow response or incorrect use can produce misleading readings. Equipment does not remove the need for judgement. | How could an instrument reading be checked?
Repeated measurements help test reliability. | Similar readings under unchanged conditions increase confidence that a result is repeatable. | What might widely scattered readings indicate?
Some observations require senses for safety, but not direct exposure. | Smelling chemicals directly, tasting samples or looking at the Sun is unsafe; suitable instruments and procedures protect the observer. | Why should the Sun never be viewed directly?
Senses can identify unexpected events that a chosen sensor misses. | A data logger records selected variables, while a person may notice a sound, leak or colour change outside the measurement plan. | Why can combined observation be useful?
Blinded comparisons can reduce expectation effects. | Hiding sample identity helps prevent a person's prediction from influencing a sensory judgement. | When would a blind test improve evidence?
Reliable science records how each observation was obtained. | Stating the observer, instrument, unit and conditions allows limitations to be evaluated. | What metadata should accompany a measurement?`)],
    ['inference-and-prediction','Explain how observations of natural phenomena can be used to make inferences and testable predictions',rows(`
An observation is gathered; an inference is reasoned from it. | Seeing a wet oval on the ground is an observation; suggesting rain or a sprinkler caused it is an inference requiring further evidence. | What other inference could fit the same observation?
Several explanations may fit one observation. | Scientists compare alternatives and seek new evidence that can distinguish among them. | What observation could separate two explanations?
Patterns in repeated observations support predictions. | If a relationship persists under similar conditions, it can be used to state an expected future result. | When would extrapolating a pattern be risky?
A scientific prediction must be testable. | It specifies an observable outcome that could support or challenge the underlying idea. | How could “the Moon affects us” be rewritten as a testable prediction?
Prior knowledge helps turn observations into inferences. | Scientists use established concepts while remaining alert to assumptions and alternative causes. | How can prior knowledge both help and bias reasoning?
Astronomers infer properties from light. | Spectra, brightness and motion provide indirect evidence about composition, temperature and velocity. | Which stellar property could a spectrum reveal?
Models link evidence to predictions. | A model represents important relationships and can be used to calculate or visualise what should be observed next. | What would make a model's prediction trustworthy?
Unexpected observations can challenge an inference. | Scientists first check the observation and method, then reconsider assumptions or the explanation. | Why should one anomaly be investigated rather than ignored?
Correlation alone does not establish cause. | Two variables can change together because of coincidence, a third factor or a causal connection. A controlled test may be needed. | What extra evidence supports a causal inference?
Predictions should include relevant conditions. | “The shadow will shorten” is clearer when time, location and measurement method are specified. | Which conditions affect a shadow prediction?`)],
    ['research-approaches','Explore the different approaches scientists use in scientific research, including systematic observations and controlled experiments',rows(`
Systematic observation follows a planned method without deliberately changing the system. | Astronomers record natural events at chosen times and wavelengths because stars and galaxies cannot be placed in a laboratory. | Why is astronomy often observational?
A controlled experiment deliberately changes an independent variable. | Other relevant factors are kept consistent so changes in the dependent variable can be linked more confidently to the variable tested. | What makes an experiment controlled?
The question should determine the research approach. | A causal question may suit an experiment, while a rare eclipse, animal migration or distant galaxy may require systematic observation. | Which approach suits tracking lunar phases?
Natural experiments compare events that researchers cannot assign. | Scientists can study groups or places exposed to different conditions while carefully accounting for other differences. | Why is causal certainty harder in a natural experiment?
Field studies trade control for realism. | Measurements in natural settings include genuine complexity but more uncontrolled variation than a laboratory investigation. | When is realism more important than tight control?
Laboratory experiments isolate selected variables. | Controlled conditions can clarify cause and effect, though the simplified setting may not represent every real-world condition. | How can lab findings be tested in the field?
Long-term monitoring reveals slow cycles and trends. | Consistent observations over months or years can expose patterns invisible in a short experiment. | What astronomical pattern needs long-term observation?
Surveys collect comparable information from many cases. | Standard questions or measurements can reveal distributions and associations, but sampling choices affect conclusions. | What makes a survey sample representative?
Computer simulations investigate systems that are huge, slow, dangerous or inaccessible. | Simulations test consequences of assumptions, but their output depends on model rules and input data. | How should a simulation be validated?
Research often combines several approaches. | Observations can identify a pattern, experiments can test mechanisms and models can explore consequences, producing stronger evidence together. | How could three approaches investigate one question?`)],
    ['safe-variable-investigation','Follow a sequence of instructions to safely conduct an investigation, and use scientific tools and instruments to observe how changing the independent variable of the investigation can cause a change in its dependent variable',rows(`
The independent variable is the factor deliberately changed. | It should have a sensible range and increments so its effect can be compared safely. | What is the independent variable in a shadow-length investigation?
The dependent variable is the measured response. | It must be defined with a suitable instrument, unit and measurement method. Consistent technique makes results comparable across trials. | How would you measure the dependent variable consistently?
Controlled variables are kept as consistent as practical. | If another relevant factor changes, it may offer an alternative explanation for the result. | Which variables should be controlled when testing crater size?
A written method makes a safe sequence visible before work begins. | Numbered steps help identify hazards, equipment needs and when measurements will be taken. | Why should risks be considered before step one?
Safety controls reduce risk without destroying the investigation. | Scientists identify hazards, judge likelihood and consequence, then use elimination, substitution, barriers or protective equipment. | Which control is stronger than wearing goggles?
Only one independent variable should normally be changed in a simple fair test. | Changing two factors together makes it difficult to determine which caused the response. | When might a multivariable investigation be appropriate?
Repeats reveal variation in the dependent variable. | Multiple trials make an unusual reading visible and allow a representative value such as a mean to be calculated. | How many repeats are enough?
Measurements should be recorded as they are made. | Immediate recording with units reduces memory errors and selective reporting. A pre-planned table helps ensure no result is quietly omitted. | What belongs in a raw-data table?
A valid investigation actually tests its stated question. | Precise measurements cannot rescue a method in which variables and evidence do not address the claim. | How does validity differ from precision?
Unexpected results should be checked, not silently removed. | Scientists inspect the method, instrument and conditions, document reasons and repeat when appropriate. | When may an anomalous result be excluded?`)],
    ['observations-over-time','Conduct an investigation using scientific tools and instruments to make a series of observations over time',rows(`
A time-series investigation uses consistent measurements at planned intervals. | Regular timing helps distinguish genuine change from differences in when observations happened. | How often should a growing shadow be measured?
The interval should match the rate of change. | Fast processes need frequent readings; slow cycles can be sampled less often without missing important detail. | What happens if the interval is too long?
The same instrument and method improve comparability over time. | Changing devices or technique can create an apparent trend unrelated to the phenomenon. | How could an instrument change be documented?
Date, time and conditions are part of the evidence. | Weather, location, observer and setup may explain variation and allow others to interpret the series correctly. | Which conditions matter in Moon observations?
Automated sensors can collect data when people are absent. | Data loggers provide frequent, consistent readings, but power loss, drift or placement errors still require checks. | What could make a logger's series unreliable?
Baseline observations show what was happening before a change. | Without a starting pattern, it is harder to judge whether later values are unusual. | Why collect data before an intervention?
Repeated observations can reveal cycles. | Day-night, lunar, tidal and seasonal patterns become apparent when the series spans enough of the cycle. | How long must lunar phases be observed?
Missing observations should be marked, not invented. | Gaps affect analysis and must be distinguished from a measured value of zero. Recording the reason for a gap can help assess its impact. | How should a graph show missing data?
Photographs can become measurements when scale and viewpoint are controlled. | A fixed camera position and reference ruler allow changes in size or position to be compared over time. | Why does camera angle matter?
Long-term conclusions require a sufficiently long record. | A brief rise may be short-term variation rather than a sustained trend. The claim must match the duration observed. | Can one week establish a seasonal trend?`)],
    ['tables-graphs-conclusions','Tabulate and graph data from an investigation to identify trends, patterns and relationships, and draw conclusions',rows(`
A good data table has descriptive headings and units. | Independent-variable values usually lead, while each dependent measurement and repeat has a clearly labelled place. | Why should units appear in headings rather than every cell?
Raw data should be preserved before calculations. | Original measurements allow errors, rounding and later processing to be checked. | Why keep raw and processed data separate?
The graph type should match the variables. | Line or scatter graphs suit numerical relationships, while bar graphs compare categories. | Which graph suits temperature measured every minute?
The independent variable normally belongs on the horizontal axis. | This convention makes it easier to read how the measured response changes as the chosen variable changes. | When might time be the independent variable?
Axis scales should use space efficiently without distorting the data. | Equal intervals must represent equal numerical changes, and a truncated axis should be clear. | How can a poor scale exaggerate a difference?
A trend describes the overall direction, not every point. | Data commonly vary around a relationship; scientists consider the pattern and the scatter together. | How would you describe a positive relationship?
An anomaly is a point that does not fit the overall pattern. | It may be a genuine event or an error and should be investigated using records and repeats. | Why is deleting an anomaly automatically poor practice?
A line of best fit summarises a relationship in scattered data. | It need not pass through every point and should balance the overall pattern rather than connect dots mechanically. | What can distance from the line show?
A conclusion answers the question using evidence. | It states the observed relationship, cites relevant data and avoids claiming beyond the investigation's limits. | What makes a conclusion evidence-based?
Correlation does not by itself prove causation. | A graph can show variables related without showing that one directly caused the other; design and alternative factors matter. | What additional evidence could support cause?`)]
  ]},
  {id:'space-science',label:'Space science',statements:[
    ['solar-system-models','Compare historical and current solar system models to show how models are modified or rejected due to new scientific evidence',rows(`
Early geocentric models placed Earth near the centre of celestial motion. | They could reproduce some visible patterns but required increasingly complex paths as more accurate observations accumulated. | Why can a useful model still be wrong about structure?
Heliocentric models placed the planets in orbit around the Sun. | Reorganising the Solar System explained retrograde motion more simply and generated new observational tests. | How does heliocentrism explain apparent backward motion?
Galileo's telescopic observations challenged simple geocentric claims. | The phases of Venus and moons orbiting Jupiter showed that not everything circles Earth. | Which observation was most diagnostic and why?
Kepler replaced perfect circular orbits with ellipses. | Careful analysis of Tycho Brahe's measurements showed that elliptical paths predicted planetary positions more accurately. | Why should evidence outrank a preference for perfect circles?
Newton connected planetary and earthly motion with gravity. | One mathematical framework explained falling objects, lunar motion and planetary orbits, increasing the model's explanatory power. | What made this unification powerful?
Scientific models may preserve useful parts when revised. | Heliocentric geometry remained while details about orbit shape, forces and the Sun's own motion changed. | Which features of an old model can remain useful?
New instruments can expose differences between competing models. | Telescopes increased angular detail and revealed phenomena unavailable to unaided observers. | What modern instrument might revise a current model?
Predictions allow models to be compared fairly. | Scientists calculate what each model expects, then seek observations on which the predictions differ. | Why are unique predictions especially valuable?
The Solar System is not the centre of the Universe. | Successive evidence placed the Sun within the Milky Way and the Milky Way among billions of galaxies. | How did changing scale alter humanity's model?
Models are judged by evidence, accuracy, scope and usefulness. | A model that fits data with fewer unsupported assumptions may be preferred, while all models retain limits. | Should the simplest model always win?`)],
    ['earth-sun-moon-positions','Explain that predictable and observable phenomena on the Earth are caused by the relative positions of the Sun, the Earth and the Moon',rows(`
Day and night result from Earth's rotation relative to the Sun. | As Earth turns, locations move into and out of the sunlit half about once each day. | Why is it daytime in Sydney while elsewhere it is night?
The Sun's apparent daily path is mainly caused by Earth's rotation. | Earth rotates west to east, making the Sun appear to move east to west across the sky. | What evidence shows Earth is turning instead?
Seasons result from Earth's axial tilt as it orbits the Sun. | Each hemisphere alternately tilts toward and away from the Sun, changing sun angle and daylight duration. | Why is distance from the Sun not the main cause?
Opposite hemispheres experience opposite seasons. | When the Southern Hemisphere tilts toward the Sun, the Northern Hemisphere tilts away. | What season occurs in Europe during an Australian summer?
The Moon shines mainly by reflected sunlight. | Half the Moon is illuminated at any moment, and its position relative to Earth determines how much of that half we see. | Does Earth's shadow cause ordinary lunar phases?
Tides are strongly influenced by the relative positions of Earth, Moon and Sun. | Gravity and the geometry of the three bodies produce changing tidal ranges, with local geography modifying times and heights. | When do spring tides occur?
A solar eclipse needs the Moon between Earth and the Sun. | The Moon's shadow reaches only a narrow part of Earth, so totality is visible from a limited path. | Why is a solar eclipse not seen worldwide?
A lunar eclipse needs Earth between the Sun and Moon. | The Moon passes through Earth's shadow and can be viewed from much of Earth's night side. | Why does a lunar eclipse occur only near full moon?
The Moon rises at different times as it moves around Earth. | Its eastward orbital motion means Earth must rotate a little farther each day before the Moon reaches a similar sky position. | Why does moonrise shift later on average?
Predictable geometry allows astronomical calendars. | Repeated motions make phases, eclipses, solstices and equinoxes calculable, although visibility also depends on location and weather. | Which information is needed to predict local visibility?`)],
    ['lunar-phases-eclipses-models','Use physical models or virtual simulations to explain the cyclic patterns of lunar phases and eclipses of the Sun and Moon',rows(`
Lunar phases repeat as the Moon orbits Earth. | The changing angle between Sun, Moon and observer changes the visible fraction of the Moon's sunlit half over about 29.5 days. | What must a phase model keep fixed?
New moon occurs when the Moon is near the Sun's direction in the sky. | The illuminated half faces mostly away from Earth, so the near side appears dark. | Why is new moon difficult to observe?
Full moon occurs when Earth is approximately between Sun and Moon. | The Moon's near side is then almost fully illuminated from our viewpoint. Its orbit usually carries it above or below Earth's shadow. | Why does every full moon not become an eclipse?
First and third quarter moons appear half lit. | The name describes position in the cycle, not the illuminated fraction, which is about one half as seen from Earth. | Why is “half moon” potentially ambiguous?
Waxing means the visible illuminated fraction is increasing. | From new moon to full moon, more of the lit half becomes visible each evening. After full moon, the illuminated fraction wanes. | How could observations distinguish waxing from waning?
The Moon's orbital plane is tilted relative to Earth's orbit. | Most months the Moon passes above or below the exact Sun-Earth line, preventing an eclipse. | What alignment is needed for an eclipse?
A physical phase model requires one light source. | A lamp represents the Sun, a ball the Moon and the observer's head Earth; stray room light can confuse the pattern. | Where should the observer stand?
Scale limits make eclipse models misleading if ignored. | Classroom objects are far too close and often the wrong relative sizes, so shadows occur more easily than in the real system. | How should a teacher explain this limitation?
Virtual simulations allow viewpoint and time to be changed. | Seeing both a space view and an Earth view helps connect three-dimensional positions with the observed phase. | What can a simulation show better than a static diagram?
A model explains only if its parts map to the real system. | Labels, movement direction, light source and observer position must be identified, and limitations should be stated. | How would you test whether a peer understands the model?`)]
  ]},
  {id:'first-nations-astronomy',label:'Aboriginal and Torres Strait Islander Peoples’ Cultural Knowledges of astronomy',statements:[
    ['moon-phases-and-tides','Investigate the similarities between Aboriginal and Torres Strait Islander accounts and mainstream scientific explanations about the phases of the Moon and how the phases affect tides',rows(`
Aboriginal and Torres Strait Islander astronomical Knowledges are diverse and place-specific. | Accounts belong to particular Peoples and Countries, so they should not be collapsed into one universal story. | Why should a source identify its Community and Country?
Long-term observation connects sky patterns with local waters. | Knowledge developed across generations can encode relationships among lunar cycles, tidal timing and safe activity. | What makes repeated observation powerful evidence?
Both Cultural Knowledge and mainstream science recognise cyclic lunar change. | They may express and organise knowledge differently while describing repeatable relationships in the natural world. | How can explanations differ while observations overlap?
Moon phases provide a visible marker within the lunar-tidal cycle. | The relative Sun-Earth-Moon geometry influences tidal range, while coast shape and weather affect local tides. | Why is phase alone insufficient for an exact tide height?
New and full moons are associated with larger spring tidal ranges. | The Sun and Moon's tidal effects align more strongly at these positions; “spring” means rise, not the season. | Why can local high tide occur at different clock times?
Quarter moons are associated with smaller neap tidal ranges. | Sun and Moon act at roughly right angles, reducing the combined difference between high and low water. | Does neap tide mean no tide?
Knowledge about tides is connected to Country, responsibility and practice. | Astronomical observations may guide travel, fishing, gathering and ceremony within a living cultural system. | Why is removing knowledge from context risky?
Respectful investigation uses Indigenous-authored or Community-approved sources. | Accurate attribution recognises authority and avoids treating sacred, restricted or local knowledge as freely interchangeable. | How can a class check whether a source is appropriate?
Scientific comparison should seek relationships without ranking knowledge systems. | The goal is to understand observations, purposes and explanatory frameworks, not declare one culture a simplified version of another. | What language supports respectful comparison?
Local tide data can be compared with lunar observations. | Recording phase, tide time and range over weeks creates a dataset, but weather and coastline effects must be considered. | What variables would belong in the table?`)],
    ['stars-and-weather','Explain how Aboriginal and Torres Strait Islander Peoples use stars to identify specific weather phenomena',rows(`
Star knowledge is local to particular Countries and skies. | A star's seasonal appearance can coincide with weather patterns in one region but not another, so claims need attribution and location. | Why is a national generalisation unreliable?
The heliacal rising of a star is its first dawn appearance after a period hidden by sunlight. | Because this occurs at a similar seasonal point, it can act as a calendar marker connected with expected weather. | Why must the horizon and latitude be considered?
Changes in a star's position can mark seasonal progression. | Repeated observations at similar times show predictable annual movement caused by Earth's orbit. | How could observers record this without a clock?
Star brightness and visibility are affected by atmospheric conditions. | Cloud, dust, smoke, moisture and turbulence can change how the sky appears and may provide immediate weather information. | Which atmospheric condition could reduce visibility?
Sky observations become useful through relationships with Country. | Stars are read alongside winds, plants, animals, water and temperature rather than as isolated signals. | Why are multiple indicators more reliable?
Knowledge is maintained through observation, story, practice and teaching. | Cultural forms can preserve detailed seasonal relationships across generations while carrying responsibilities and meaning. | Why is oral transmission not the same as casual guessing?
An annual sky marker predicts a seasonal tendency, not exact daily weather. | Climate patterns recur broadly, while day-to-day weather varies. Scientific language should distinguish the two. | How does climate differ from weather?
Light pollution can disrupt access to star-based observations. | Artificial sky glow hides faint stars and can affect cultural practice, navigation and scientific observing. | What could a community do to protect dark skies?
Respectful learning begins with local Community guidance where possible. | Knowledge holders decide how knowledge is shared and interpreted; published material should be appropriately sourced. | Who has authority to explain local knowledge?
Mainstream astronomy can explain why seasonal star appearances repeat. | Earth's orbit changes the night side's direction through the year, connecting predictable sky patterns with seasons. | How does Earth's orbit change the visible constellations?`)],
    ['seasonal-predictions','Describe how Aboriginal and/or Torres Strait Islander Peoples predicted seasonal phenomena based on their observations of the stars and phases of the Moon to predict animal behaviour, plant cycles and tidal changes',rows(`
Indigenous seasonal calendars are specific to Country. | Many recognise more than four seasons and connect sky, weather, plants, animals and waters through local observation. | Why would a six-season calendar suit some regions better?
The first appearance of a star can signal ecological events. | When a predictable sky event coincides repeatedly with flowering, migration or breeding, it becomes a useful seasonal indicator. | Is the star necessarily causing the ecological event?
Lunar observations can guide expectations about tidal range. | Moon phase is one indicator within knowledge that also considers coastline, winds, currents and local experience. | Why combine lunar and local water observations?
Animal behaviour can be a seasonal indicator and a predicted event. | Changes in calling, nesting, migration or abundance may coincide with sky and weather patterns. | How could this relationship be recorded systematically?
Plant cycles provide evidence of seasonal change. | Flowering, fruiting and new growth respond to environmental conditions and can align with astronomical calendar markers. | Why might climate change shift the relationship?
Prediction does not require a mechanical clock or written table. | Careful, repeated, shared observation can establish reliable sequences and relationships using environmental markers. | What makes a qualitative prediction reliable?
Several indicators together reduce uncertainty. | A star appearance, wind shift and plant flowering may jointly provide stronger guidance than any one sign. | How is this similar to multiple lines of evidence?
Seasonal knowledge supports decisions and responsibilities. | Predictions can inform when to travel, harvest, fish or avoid disturbance, connecting knowledge with sustainable practice. | Why is prediction inseparable from purpose?
Environmental relationships should be learned from attributed sources. | Specific examples belong to Peoples and places; respectful science education names sources and avoids inventing a generic account. | What should a citation include?
Long records can reveal when familiar seasonal relationships change. | Comparing present observations with knowledge held across generations may show altered timing caused by environmental change. | What evidence could show a seasonal shift?`)]
  ]},
  {id:'observing-universe-in-context',label:'Observing the Universe in context',statements:[
    ['recent-advancement','Investigate how a recent advancement in science has increased knowledge of the world and the Universe',rows(`
The James Webb Space Telescope observes infrared radiation from distant objects. | Its large mirror, cold instruments and space location reveal early galaxies, star-forming regions and planetary atmospheres hidden from visible-light telescopes. | Why is infrared useful for looking through dust?
Gravitational-wave detectors opened a new way to observe the Universe. | They measure tiny changes in distance caused by ripples in spacetime from events such as merging black holes and neutron stars. | How is this evidence different from light?
Event Horizon Telescope observations resolved black-hole shadows. | Radio telescopes across Earth acted together as a virtual planet-sized instrument, testing predictions in extreme gravity. | Why was global collaboration essential?
Gaia measures positions and motions of enormous numbers of stars. | Precise astrometry builds a three-dimensional, changing map of the Milky Way and helps reconstruct its history. | What can stellar motion reveal?
Modern exoplanet missions detect tiny, repeated changes in starlight. | Transit data reveal planet size and orbit, while follow-up spectra can investigate atmospheric composition. | Why does one dip not prove a planet?
Sample-return missions bring extraterrestrial material to Earth laboratories. | Carefully documented asteroid or lunar samples can be analysed with instruments too large and complex to send into space. | Why must contamination be controlled?
Adaptive optics sharpens ground-based telescope images. | Mirrors change shape rapidly to compensate for atmospheric turbulence measured from guide stars. | What limitation does the technology reduce?
Large digital sky surveys turn astronomy into data-intensive science. | Automated telescopes repeatedly image the sky, allowing computers to find changing objects and patterns across billions of measurements. | Why is open data valuable here?
Citizen-science platforms help classify large astronomical datasets. | Many people can recognise patterns, while researchers validate results and account for bias and error. | Which tasks suit humans better than algorithms?
An advancement includes methods and collaboration, not only hardware. | New algorithms, shared databases and coordinated multi-wavelength observations can increase knowledge without a single new telescope. | How would you judge an advancement's scientific impact?`)]
  ]}
];

const ws = ['SC4-WS-01','SC4-WS-02','SC4-WS-03','SC4-WS-04','SC4-WS-05','SC4-WS-06','SC4-WS-07','SC4-WS-08'];
const dilemmas = [
  ['make one exceptionally detailed observation','make ten simpler repeated observations'],
  ['use a direct physical model','use a virtual simulation you can pause and rotate'],
  ['prioritise wider measurement range','prioritise greater sensitivity to small changes'],
  ['investigate a familiar pattern under controlled conditions','observe a rare event in its natural setting'],
  ['trust a result that matches your prediction','investigate an unexpected result first'],
  ['explain the evidence with the simplest workable model','choose a more complex model that predicts more detail'],
  ['collect a smaller carefully controlled dataset','collect a much larger dataset with more uncontrolled variation'],
  ['communicate the conclusion in one clear graph','communicate it in a detailed written explanation'],
  ['repeat the investigation yourself','ask an independent team to repeat it'],
  ['make a cautious claim supported by current evidence','make a bold claim that creates a strong new test']
];

let itemNo = 0;
for (const section of sections) for (const statement of section.statements) {
  const [id, wording, ideas] = statement;
  statement[2] = ideas.map((idea, index) => ({
    id:`otu-${id}-cookie-${String(index+1).padStart(2,'0')}`,
    kind:'fortune-cookie', statement:idea.statement, explanation:idea.explanation, think:idea.think,
    metadata:{outcome:'SC4-OTU-01',contentStatement:wording,difficulty:(index%3)+1,type:['concept','evidence','application'][index%3],workingScientifically:[ws[(itemNo+index)%ws.length]],lessonUse:['starter','revision','plenary'],keywords:id.split('-')}
  }));
  statement[3] = ideas.map((idea, index) => {
    const [a,b] = dilemmas[index];
    return {id:`otu-${id}-wyr-${String(index+1).padStart(2,'0')}`,kind:'would-you-rather',prompt:'Would you rather…',optionA:`${a}, focused on “${idea.statement.replace(/[.?]$/,'')}”`,optionB:`${b}, focused on the same idea`,explanation:`Both choices can be defended, but the justification must match the evidence needed. ${idea.explanation} Option A emphasises one scientific strength; option B emphasises another, so limitations and the investigation question decide which is stronger.`,think:idea.think,metadata:{outcome:'SC4-OTU-01',contentStatement:wording,difficulty:(index%3)+1,type:['concept-choice','evidence-choice','open-dilemma'][index%3],workingScientifically:[ws[(itemNo+index+2)%ws.length]],lessonUse:['starter','hinge','revision'],keywords:id.split('-')}};
  });
  itemNo += 10;
}

const detailedItems = sections.flatMap(s => s.statements.flatMap(st => [...st[2],...st[3]]));
const overviewOutcomes = [
  ['SC4-OTU-01','Observing the Universe'],
  ['SC4-WS-01','Observing'],['SC4-WS-02','Questioning and predicting'],['SC4-WS-03','Planning investigations'],['SC4-WS-04','Conducting investigations'],['SC4-WS-05','Processing data and information'],['SC4-WS-06','Analysing data and information'],['SC4-WS-07','Problem-solving'],['SC4-WS-08','Communicating']
];
const overview = overviewOutcomes.map(([outcome,label], oi) => {
  const source = Array.from({length:10},(_,i)=>detailedItems[((oi*17+i*19)*2)%detailedItems.length]);
  const cookies = source.map((x,i)=>({...x,id:`otu-overview-${outcome.toLowerCase()}-cookie-${String(i+1).padStart(2,'0')}`,metadata:{...x.metadata,outcome,contentStatement:'Overview',overviewBank:label}}));
  const wyr = source.map((x,i)=>{const y=detailedItems.find(z=>z.kind==='would-you-rather'&&z.metadata.contentStatement===x.metadata.contentStatement)||detailedItems.find(z=>z.kind==='would-you-rather');return {...y,id:`otu-overview-${outcome.toLowerCase()}-wyr-${String(i+1).padStart(2,'0')}`,metadata:{...y.metadata,outcome,contentStatement:'Overview',overviewBank:label}}});
  return {id:outcome.toLowerCase(),label,outcome,cookies,wyr};
});

const data = {schemaVersion:1,course:{id:'nsw-science-7-10-2023-stage-4',label:'NSW Science 7–10 (2023) — Stage 4'},unit:{id:'7-1-observing-the-universe',label:'7.1 Observing the Universe',outcome:'SC4-OTU-01'},overview:{id:'overview',label:'Overview',description:'Existing outcome-based whole-unit bank: 10 items per outcome in each app.',banks:overview},sections:sections.map(s=>({id:s.id,label:s.label,contentStatements:s.statements.map(([id,wording,cookies,wyr])=>({id,label:wording,wording,cookies,wyr}))})),sources:[{title:'NSW Science 7–10 Syllabus (2023)',url:'https://curriculum.nsw.edu.au/learning-areas/science/science-7-10-2023'},{title:'NSW Department of Education — Observing the Universe, Stage 4',url:'https://education.nsw.gov.au/teaching-and-learning/curriculum/science/science-curriculum-resources-k-12/science-7-10-curriculum-resources/science-s4-observing-the-universe'}]};

fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,JSON.stringify(data,null,2)+'\n');
console.log(`Wrote ${out}`);
console.log(`${overview.flatMap(x=>[...x.cookies,...x.wyr]).length} overview + ${detailedItems.length} detailed items`);

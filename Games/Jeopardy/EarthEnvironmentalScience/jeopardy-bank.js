/* Dedicated, teacher-authored Jeopardy clues for Earth and Environmental Science. */
(() => {
  'use strict';
  const category = (name, rows) => [name, rows.map(([response, clue, guidance]) => `${response}|${clue}|${guidance}`)];
  window.SCISIMS_EES_JEOPARDY = {
    m1: [
      category('Resource basics', [
        ['Renewable resource','This resource is naturally replenished on a timescale comparable with its use.','A renewable resource.'],
        ['Non-renewable resource','Coal and metallic ores belong to this resource class because formation is much slower than consumption.','A non-renewable resource.'],
        ['Ore','This rock contains a valuable material at a concentration that may be economically extracted.','Ore.'],
        ['Reserve','This is the economically recoverable portion of a known resource under current conditions.','A reserve.'],
        ['Sustainability','This principle meets present needs without undermining the capacity of future generations.','Sustainability.']
      ]),
      category('Finding deposits', [
        ['Geological mapping','This exploration method records rock types, structures and surface relationships across an area.','Geological mapping.'],
        ['Geophysical survey','This method infers subsurface geology from properties such as magnetism, gravity or electrical conductivity.','A geophysical survey.'],
        ['Geochemical survey','Anomalous element concentrations in soil, water or sediment are sought using this exploration method.','A geochemical survey.'],
        ['Remote sensing','Satellite or airborne measurements used to identify alteration or landform patterns are examples of this technique.','Remote sensing.'],
        ['Exploratory drilling','This invasive method provides core or cuttings that directly sample a possible deposit.','Exploratory drilling.']
      ]),
      category('Water resources', [
        ['Catchment','All land draining rainfall toward a common waterway or outlet forms this area.','A catchment.'],
        ['Aquifer','This permeable geological unit stores and transmits groundwater.','An aquifer.'],
        ['Water table','This boundary marks the upper surface of the saturated zone underground.','The water table.'],
        ['Recharge','Infiltrating water entering and replenishing an aquifer is called this process.','Groundwater recharge.'],
        ['Salinity','Excess dissolved salts create this water-quality problem, often intensified by irrigation or land clearing.','Salinity.']
      ]),
      category('Mining choices', [
        ['Open-pit mining','A shallow, extensive ore body is commonly extracted using this stepped surface method.','Open-pit mining.'],
        ['Underground mining','Deep ore bodies may require shafts and tunnels characteristic of this extraction method.','Underground mining.'],
        ['Ore grade','This measurement expresses the concentration of the valuable component in ore.','Ore grade.'],
        ['Cut-off grade','Material above this economic threshold is processed as ore rather than treated as waste.','The cut-off grade.'],
        ['Overburden','Soil and rock removed to expose a near-surface resource have this name.','Overburden.']
      ]),
      category('Processing and waste', [
        ['Comminution','Crushing and grinding ore to liberate valuable minerals is known collectively by this term.','Comminution.'],
        ['Concentration','This processing stage separates valuable minerals from unwanted gangue before refining.','Mineral concentration.'],
        ['Tailings','Fine waste left after valuable minerals have been separated is stored under this name.','Tailings.'],
        ['Acid mine drainage','Oxidation of exposed sulfide minerals can produce this acidic, metal-rich runoff.','Acid mine drainage.'],
        ['Rehabilitation','Reshaping, stabilising and revegetating disturbed land are parts of this post-mining process.','Mine-site rehabilitation.']
      ]),
      category('Evidence and decisions', [
        ['Environmental impact assessment','This pre-approval process predicts environmental consequences and proposes mitigation.','An environmental impact assessment.'],
        ['Baseline data','Measurements collected before development provide this reference for detecting later change.','Baseline data.'],
        ['Cost-benefit analysis','This decision tool compares expected advantages with financial, social and environmental costs.','Cost-benefit analysis.'],
        ['Traditional Owners','These knowledge holders must be consulted about impacts on Country and cultural heritage.','Traditional Owners.'],
        ['Precautionary principle','This principle supports protective action when serious harm is plausible despite incomplete certainty.','The precautionary principle.']
      ])
    ],
    m2: [
      category('Earth structure', [
        ['Crust','This thin, outermost solid layer includes oceanic and continental varieties.','The crust.'],
        ['Lithosphere','The crust plus rigid uppermost mantle form this plate-forming layer.','The lithosphere.'],
        ['Asthenosphere','Tectonic plates move over this weak, ductile zone of the upper mantle.','The asthenosphere.'],
        ['Outer core','S-wave absence and the geodynamo indicate that this metallic layer is liquid.','The outer core.'],
        ['Inner core','Extreme pressure keeps this central iron-rich layer solid despite high temperature.','The inner core.']
      ]),
      category('Plate boundaries', [
        ['Divergent boundary','New oceanic crust forms where plates move apart at this boundary type.','A divergent boundary.'],
        ['Convergent boundary','Subduction or continental collision occurs where plates meet at this boundary type.','A convergent boundary.'],
        ['Transform boundary','Shallow earthquakes occur where plates slide horizontally past each other at this boundary.','A transform boundary.'],
        ['Subduction zone','A dense oceanic plate descends into the mantle at this tectonic setting.','A subduction zone.'],
        ['Triple junction','Three plate boundaries meet at this tectonic feature.','A triple junction.']
      ]),
      category('Evidence for motion', [
        ['Continental fit','The matching coastlines of South America and Africa provide this early line of evidence.','Continental fit.'],
        ['Fossil correlation','Identical land-organism fossils on separated continents provide this evidence for former connection.','Fossil correlation.'],
        ['Palaeomagnetism','Magnetic directions preserved in cooling rocks provide this evidence of plate movement.','Palaeomagnetism.'],
        ['Magnetic striping','Symmetrical polarity bands on either side of ridges support this process: seafloor spreading.','Magnetic striping.'],
        ['GPS geodesy','Millimetre-scale present-day plate movement is measured directly using this satellite technique.','GPS geodesy.']
      ]),
      category('Seafloor story', [
        ['Mid-ocean ridge','Upwelling mantle and newly formed basalt characterise this divergent feature.','A mid-ocean ridge.'],
        ['Seafloor spreading','Magma creates new crust at a ridge and moves older crust outward in this process.','Seafloor spreading.'],
        ['Ocean trench','This deep linear feature commonly marks where oceanic lithosphere begins to subduct.','An ocean trench.'],
        ['Youngest ocean crust','Relative to a ridge, crust of this age occurs closest to the spreading centre.','The youngest ocean crust.'],
        ['Sediment thickness','This measurement generally increases with distance from a mid-ocean ridge.','Sediment thickness.']
      ]),
      category('Tectonic landforms', [
        ['Volcanic island arc','Ocean-ocean subduction can produce this curved chain of volcanoes.','A volcanic island arc.'],
        ['Continental volcanic arc','Ocean-continent subduction can create this volcanic belt above the descending slab.','A continental volcanic arc.'],
        ['Rift valley','Continental extension and normal faulting commonly produce this elongated depression.','A rift valley.'],
        ['Fold mountains','Continental collision shortens and thickens crust to form these large ranges.','Fold mountains.'],
        ['Hotspot track','An age-progressive volcanic chain can record plate motion over this relatively fixed mantle source.','A hotspot track.']
      ]),
      category('Reasoning with plates', [
        ['Convection','Heat-driven density differences causing mantle movement are described by this process.','Convection.'],
        ['Slab pull','The sinking weight of cold dense lithosphere produces this plate-driving force.','Slab pull.'],
        ['Ridge push','Gravitational sliding away from elevated ridges contributes this plate-driving force.','Ridge push.'],
        ['Benioff zone','An inclined plane of earthquake foci traces a descending slab in this zone.','A Wadati-Benioff zone.'],
        ['Uniformitarianism','Using present tectonic processes to interpret ancient rocks applies this geological principle.','Uniformitarianism.']
      ])
    ],
    m3: [
      category('Energy sources', [
        ['Solar radiation','This external energy source drives most weather, climate and surface water cycling.','Solar radiation.'],
        ['Geothermal energy','Radioactive decay and residual formation heat supply this internal Earth energy.','Geothermal energy.'],
        ['Gravitational energy','Tides and downhill mass movement are strongly influenced by this energy source.','Gravitational energy.'],
        ['Chemical energy','Energy stored in molecular bonds has this name.','Chemical energy.'],
        ['Nuclear energy','Fusion in the Sun and radioactive decay involve this form of energy.','Nuclear energy.']
      ]),
      category('Heat transfer', [
        ['Conduction','Particle collisions transfer heat through matter by this process.','Conduction.'],
        ['Convection','Bulk movement of a fluid transports heat by this process.','Convection.'],
        ['Radiation','Energy travelling as electromagnetic waves uses this transfer mechanism.','Radiation.'],
        ['Latent heat','Energy absorbed or released during a change of state has this name.','Latent heat.'],
        ['Advection','Horizontal movement of air or water transports heat by this process.','Advection.']
      ]),
      category('Water cycle energy', [
        ['Evaporation','Liquid water absorbs latent heat during this surface process.','Evaporation.'],
        ['Condensation','Water vapour releases latent heat when it undergoes this change.','Condensation.'],
        ['Transpiration','Plants release water vapour to the atmosphere through this process.','Transpiration.'],
        ['Runoff','Gravity drives surface water downslope in this part of the water cycle.','Runoff.'],
        ['Infiltration','Water entering soil from the surface undergoes this process.','Infiltration.']
      ]),
      category('Earth systems', [
        ['Atmosphere','The gaseous Earth system is known by this name.','The atmosphere.'],
        ['Hydrosphere','All liquid water on and near Earth belongs to this system.','The hydrosphere.'],
        ['Geosphere','Rocks, minerals, landforms and Earth’s interior form this system.','The geosphere.'],
        ['Biosphere','All living organisms and regions supporting life form this system.','The biosphere.'],
        ['Cryosphere','Snow, glaciers, ice sheets and sea ice form this system.','The cryosphere.']
      ]),
      category('Energy budgets', [
        ['Albedo','This property is the fraction of incoming radiation reflected by a surface.','Albedo.'],
        ['Radiative equilibrium','Incoming and outgoing energy are balanced in this ideal planetary condition.','Radiative equilibrium.'],
        ['Greenhouse effect','Atmospheric absorption and re-emission of infrared radiation produces this warming process.','The greenhouse effect.'],
        ['Energy efficiency','Useful energy output divided by total energy input gives this quantity.','Energy efficiency.'],
        ['Entropy','Energy dispersal and reduced capacity to do useful work are associated with this thermodynamic quantity.','Entropy.']
      ]),
      category('Applying transformations', [
        ['Hydroelectricity','Gravitational potential energy of stored water ultimately drives this electricity source.','Hydroelectricity.'],
        ['Wind power','Solar heating creates pressure differences that indirectly power this renewable technology.','Wind power.'],
        ['Geothermal power','Heat from Earth’s interior supplies this electricity-generation method.','Geothermal power.'],
        ['Photosynthesis','Light energy is converted to chemical energy through this biological process.','Photosynthesis.'],
        ['Tidal power','Periodic gravitational interactions are harvested by this renewable technology.','Tidal power.']
      ])
    ],
    m4: [
      category('Pollution types', [
        ['Air pollution','Harmful gases or particles introduced into the atmosphere produce this form of pollution.','Air pollution.'],
        ['Water pollution','Contaminants degrading aquatic quality produce this form of pollution.','Water pollution.'],
        ['Soil contamination','Persistent chemicals or metals accumulating in land produce this impact.','Soil contamination.'],
        ['Noise pollution','Excessive environmental sound causing harm or disruption has this name.','Noise pollution.'],
        ['Light pollution','Artificial illumination disrupting ecosystems or the night sky has this name.','Light pollution.']
      ]),
      category('Measuring impact', [
        ['Baseline data','These pre-development measurements provide a reference for later comparison.','Baseline data.'],
        ['Indicator species','The condition of this organism provides evidence about environmental quality.','An indicator species.'],
        ['Bioaccumulation','A contaminant increasing within an organism over time undergoes this process.','Bioaccumulation.'],
        ['Biomagnification','Increasing contaminant concentration at higher trophic levels is called this process.','Biomagnification.'],
        ['Dose-response relationship','This relationship compares exposure magnitude with the resulting biological effect.','A dose-response relationship.']
      ]),
      category('Climate forcing', [
        ['Greenhouse gas','A gas that absorbs and re-emits infrared radiation belongs to this class.','A greenhouse gas.'],
        ['Carbon dioxide','Fossil-fuel combustion is a major anthropogenic source of this greenhouse gas.','Carbon dioxide.'],
        ['Methane','Wetlands, livestock and fossil-fuel leakage emit this potent greenhouse gas.','Methane.'],
        ['Radiative forcing','A change in Earth’s energy balance caused by a driver is measured by this quantity.','Radiative forcing.'],
        ['Enhanced greenhouse effect','Human-caused increases in greenhouse gases strengthen warming through this process.','The enhanced greenhouse effect.']
      ]),
      category('Land-use change', [
        ['Deforestation','Large-scale removal of forest has this name.','Deforestation.'],
        ['Habitat fragmentation','Breaking continuous habitat into smaller isolated patches causes this impact.','Habitat fragmentation.'],
        ['Erosion','Removal and transport of soil or rock by water, wind or gravity is this process.','Erosion.'],
        ['Urban heat island','Built surfaces make cities warmer than surrounding rural areas through this effect.','The urban heat-island effect.'],
        ['Salinisation','Salt accumulation in soil or water through altered drainage produces this degradation.','Salinisation.']
      ]),
      category('Managing impacts', [
        ['Mitigation','Action that reduces the magnitude or likelihood of an adverse impact is called this.','Mitigation.'],
        ['Remediation','Removing, containing or neutralising contamination is this management response.','Remediation.'],
        ['Conservation','Protecting biodiversity, habitats or resources is described by this response.','Conservation.'],
        ['Regulation','Legally enforceable limits and requirements are this form of management.','Regulation.'],
        ['Monitoring','Repeated measurement used to detect environmental change is called this.','Monitoring.']
      ]),
      category('Evaluating evidence', [
        ['Control site','An unaffected comparison location used in an impact study has this name.','A control site.'],
        ['Confounding variable','An uncontrolled factor associated with both cause and outcome is this type of variable.','A confounding variable.'],
        ['Correlation','A statistical association that does not itself establish causation is this.','Correlation.'],
        ['Replication','Independent repetition used to test whether findings persist is this process.','Replication.'],
        ['Uncertainty','The quantified range or limitation around a measurement or conclusion is this.','Uncertainty.']
      ])
    ],
    m5: [
      category('Earth spheres', [
        ['Geosphere','The solid Earth and its internal structure form this sphere.','The geosphere.'],
        ['Atmosphere','Earth’s layers of gases form this sphere.','The atmosphere.'],
        ['Hydrosphere','Earth’s liquid water forms this sphere.','The hydrosphere.'],
        ['Biosphere','Living organisms and their regions form this sphere.','The biosphere.'],
        ['Cryosphere','Earth’s frozen water forms this sphere.','The cryosphere.']
      ]),
      category('Rock cycle', [
        ['Igneous rock','Cooling and crystallisation of magma or lava produces this rock type.','Igneous rock.'],
        ['Sedimentary rock','Deposition, compaction and cementation commonly produce this rock type.','Sedimentary rock.'],
        ['Metamorphic rock','Heat, pressure and fluids alter existing rock into this type without complete melting.','Metamorphic rock.'],
        ['Weathering','Breakdown of rock in place by physical, chemical or biological processes is this.','Weathering.'],
        ['Lithification','Compaction and cementation transforming sediment into rock is called this.','Lithification.']
      ]),
      category('Surface processes', [
        ['Erosion','Removal and transport of weathered material is this process.','Erosion.'],
        ['Deposition','Sediment settling when transport energy decreases undergoes this process.','Deposition.'],
        ['Mass movement','Gravity-driven downslope movement of rock or soil is called this.','Mass movement.'],
        ['Fluvial process','River and stream action is described by this term.','A fluvial process.'],
        ['Coastal erosion','Wave, current and wind action removing shoreline material causes this.','Coastal erosion.']
      ]),
      category('Dating the past', [
        ['Superposition','In undisturbed strata, the oldest layer lies lowest according to this principle.','The principle of superposition.'],
        ['Cross-cutting relationship','A feature cutting another must be younger according to this relative-dating principle.','Cross-cutting relationships.'],
        ['Index fossil','A widespread, short-lived species used to correlate rock layers is this type of fossil.','An index fossil.'],
        ['Radiometric dating','Known radioactive decay rates provide numerical ages using this method.','Radiometric dating.'],
        ['Half-life','The time for half the radioactive parent atoms to decay is called this.','Half-life.']
      ]),
      category('Earth history', [
        ['Geological time scale','Eons, eras, periods and epochs organise Earth history in this framework.','The geological time scale.'],
        ['Unconformity','A surface representing erosion or non-deposition and missing time is this feature.','An unconformity.'],
        ['Mass extinction','A geologically rapid global loss of many species is this event.','A mass extinction.'],
        ['Fossil record','Preserved remains and traces through strata provide this evidence for past life.','The fossil record.'],
        ['Uniformitarianism','Interpreting ancient rocks using processes observed today applies this principle.','Uniformitarianism.']
      ]),
      category('System interactions', [
        ['Carbon cycle','Movement of carbon among atmosphere, oceans, rocks and organisms is this cycle.','The carbon cycle.'],
        ['Feedback loop','A system response that amplifies or reduces an initial change is this mechanism.','A feedback loop.'],
        ['Dynamic equilibrium','Opposing processes occurring at equal average rates produce this state.','Dynamic equilibrium.'],
        ['Reservoir','A location where matter is stored within an Earth-system cycle is this.','A reservoir.'],
        ['Flux','The rate of transfer of matter or energy between reservoirs is this.','A flux.']
      ])
    ],
    m6: [
      category('Earthquake science', [
        ['Focus','The underground point where rupture begins is this earthquake location.','The focus or hypocentre.'],
        ['Epicentre','The point on Earth’s surface directly above the focus is this.','The epicentre.'],
        ['P wave','This fastest seismic body wave travels through solids and liquids.','A P wave.'],
        ['S wave','This shear body wave cannot travel through liquids.','An S wave.'],
        ['Seismogram','The recorded trace of ground motion over time is this.','A seismogram.']
      ]),
      category('Measuring earthquakes', [
        ['Moment magnitude','This logarithmic magnitude measure is based on fault area, slip and rock rigidity.','Moment magnitude.'],
        ['Modified Mercalli scale','Observed shaking and damage determine intensity on this scale.','The Modified Mercalli scale.'],
        ['Magnitude','This measure describes energy released at the earthquake source.','Magnitude.'],
        ['Intensity','This location-dependent measure describes experienced shaking and damage.','Intensity.'],
        ['Triangulation','Distances from at least three stations locate an epicentre using this method.','Triangulation.']
      ]),
      category('Volcanic hazards', [
        ['Pyroclastic flow','This fast, ground-hugging mixture of hot gas, ash and rock is extremely destructive.','A pyroclastic flow.'],
        ['Lahar','Water mixed with volcanic debris forms this rapidly moving mudflow.','A lahar.'],
        ['Ash fall','Airborne fragmented volcanic material settling over an area creates this hazard.','Ash fall.'],
        ['Lava flow','Molten rock moving across the surface produces this hazard.','A lava flow.'],
        ['Volcanic gas','Sulfur dioxide and carbon dioxide released from a volcano create this hazard class.','Volcanic gas.']
      ]),
      category('Other hazards', [
        ['Tsunami','Sudden displacement of a large water volume generates this series of long waves.','A tsunami.'],
        ['Landslide','Rapid downslope movement of rock, debris or soil is this hazard.','A landslide.'],
        ['Storm surge','Wind and low pressure raising coastal water above predicted tide causes this hazard.','A storm surge.'],
        ['Drought','A prolonged period of below-normal water availability is this hazard.','A drought.'],
        ['Bushfire','Uncontrolled burning of vegetation is this hazard.','A bushfire.']
      ]),
      category('Risk and resilience', [
        ['Hazard','A potentially damaging event or process is this.','A hazard.'],
        ['Exposure','People, infrastructure or ecosystems located where a hazard may occur represent this component.','Exposure.'],
        ['Vulnerability','Susceptibility to harm given social, physical and economic conditions is this component.','Vulnerability.'],
        ['Risk','Likelihood combined with consequence is used to describe this.','Risk.'],
        ['Resilience','Capacity to prepare, absorb, recover and adapt is this quality.','Resilience.']
      ]),
      category('Reducing harm', [
        ['Early warning system','Monitoring, forecasting and communication combine in this risk-reduction system.','An early warning system.'],
        ['Building code','Engineering requirements that reduce structural failure are formalised in this.','A building code.'],
        ['Evacuation plan','Routes, triggers and responsibilities are specified in this emergency document.','An evacuation plan.'],
        ['Land-use planning','Keeping critical development away from high-risk zones uses this strategy.','Land-use planning.'],
        ['Hazard map','Spatial probability or impact zones are communicated using this product.','A hazard map.']
      ])
    ],
    m7: [
      category('Climate foundations', [
        ['Weather','Short-term atmospheric conditions at a place and time are called this.','Weather.'],
        ['Climate','Long-term statistical patterns of weather are called this.','Climate.'],
        ['Climate variability','Natural fluctuations around long-term climate conditions are called this.','Climate variability.'],
        ['Climate change','A persistent shift in the statistical state of climate is called this.','Climate change.'],
        ['Climate normal','A standard multi-decade average used for comparison is this.','A climate normal.']
      ]),
      category('Radiation balance', [
        ['Short-wave radiation','Incoming solar energy reaches Earth mainly in this wavelength class.','Short-wave radiation.'],
        ['Infrared radiation','Earth emits absorbed energy mainly in this long-wave form.','Infrared radiation.'],
        ['Albedo','The fraction of incoming radiation reflected is this property.','Albedo.'],
        ['Greenhouse effect','Absorption and re-emission of infrared radiation by gases produces this warming.','The greenhouse effect.'],
        ['Radiative forcing','A driver-induced change in Earth’s energy balance is this quantity.','Radiative forcing.']
      ]),
      category('Climate evidence', [
        ['Ice core','Trapped gases and isotope ratios make this frozen archive a climate proxy.','An ice core.'],
        ['Tree rings','Annual growth width and density make these a high-resolution terrestrial proxy.','Tree rings.'],
        ['Pollen record','Fossil pollen in sediments reconstructs past vegetation and climate using this proxy.','A pollen record.'],
        ['Coral record','Growth bands and chemistry make this marine organism a climate archive.','A coral record.'],
        ['Instrumental record','Direct measurements from thermometers and other instruments form this recent record.','The instrumental record.']
      ]),
      category('Feedbacks', [
        ['Positive feedback','A response that amplifies an initial climate change is this type of feedback.','Positive feedback.'],
        ['Negative feedback','A response that reduces an initial climate change is this type of feedback.','Negative feedback.'],
        ['Ice-albedo feedback','Melting reflective ice exposes darker surfaces and increases warming in this loop.','Ice-albedo feedback.'],
        ['Water-vapour feedback','Warming increases atmospheric moisture, strengthening greenhouse warming in this loop.','Water-vapour feedback.'],
        ['Carbon-cycle feedback','Warming that weakens natural carbon sinks can intensify change through this loop.','A carbon-cycle feedback.']
      ]),
      category('Climate drivers', [
        ['Milankovitch cycles','Eccentricity, tilt and precession together form these orbital cycles.','Milankovitch cycles.'],
        ['Volcanic aerosol','This eruption product can reflect sunlight and cause short-term global cooling.','Volcanic aerosols.'],
        ['Solar variability','Changes in energy output from the Sun are described by this driver.','Solar variability.'],
        ['Plate tectonics','Continental position and ocean gateways change over geological time through this driver.','Plate tectonics.'],
        ['Anthropogenic emissions','Human greenhouse-gas release is described by this modern climate driver.','Anthropogenic emissions.']
      ]),
      category('Responses', [
        ['Mitigation','Reducing emissions or increasing sinks to limit climate change is this response.','Mitigation.'],
        ['Adaptation','Adjusting systems to actual or expected impacts is this response.','Adaptation.'],
        ['Carbon sequestration','Capturing and storing carbon is this mitigation approach.','Carbon sequestration.'],
        ['Renewable energy','Replacing fossil-fuel energy with replenishable sources uses this mitigation option.','Renewable energy.'],
        ['Managed retreat','Moving assets away from increasingly hazardous coastlines is this adaptation strategy.','Managed retreat.']
      ])
    ],
    m8: [
      category('Resource classes', [
        ['Natural resource','A material, organism or energy source obtained from the environment is this.','A natural resource.'],
        ['Renewable resource','A resource replenished on a timescale comparable with use is this class.','A renewable resource.'],
        ['Non-renewable resource','A finite resource replenished much more slowly than consumption is this class.','A non-renewable resource.'],
        ['Mineral resource','A geological concentration with potential economic value is this resource type.','A mineral resource.'],
        ['Ecosystem service','A benefit people obtain from functioning ecosystems is this.','An ecosystem service.']
      ]),
      category('Agriculture and water', [
        ['Irrigation efficiency','Useful crop water divided by total water supplied gives this management measure.','Irrigation efficiency.'],
        ['Aquaculture','Farming fish, shellfish or algae is called this.','Aquaculture.'],
        ['Soil conservation','Practices reducing erosion and maintaining fertility belong to this management area.','Soil conservation.'],
        ['Water allocation','Rules distributing available water among users and ecosystems are this.','Water allocation.'],
        ['Environmental flow','Water deliberately retained or released to support river ecosystems is this.','An environmental flow.']
      ]),
      category('Mining impacts', [
        ['Tailings','Fine processing waste stored after mineral separation has this name.','Tailings.'],
        ['Waste rock','Excavated rock without economically recoverable target material is this.','Waste rock.'],
        ['Acid mine drainage','Sulfide oxidation creating acidic metal-rich water causes this impact.','Acid mine drainage.'],
        ['Habitat fragmentation','Infrastructure dividing habitat into smaller patches causes this impact.','Habitat fragmentation.'],
        ['Mine subsidence','Ground sinking above collapsed underground workings is this impact.','Mine subsidence.']
      ]),
      category('Circular choices', [
        ['Reduce','Avoiding material and energy demand is this first waste-hierarchy action.','Reduce.'],
        ['Reuse','Using a product again without major reprocessing is this action.','Reuse.'],
        ['Recycle','Processing discarded material into new feedstock is this action.','Recycle.'],
        ['Life-cycle assessment','Evaluating impacts from raw-material extraction through disposal uses this method.','Life-cycle assessment.'],
        ['Circular economy','Keeping materials in use and designing out waste describes this model.','A circular economy.']
      ]),
      category('Decision tools', [
        ['Environmental impact assessment','Predicting project impacts before approval uses this process.','An environmental impact assessment.'],
        ['Cost-benefit analysis','Comparing expected advantages and disadvantages uses this tool.','Cost-benefit analysis.'],
        ['Multi-criteria analysis','Scoring options against environmental, social and economic criteria uses this method.','Multi-criteria analysis.'],
        ['Risk assessment','Estimating likelihood and consequence uses this process.','Risk assessment.'],
        ['Adaptive management','Acting, monitoring and revising decisions as evidence develops is this approach.','Adaptive management.']
      ]),
      category('People and Country', [
        ['Traditional ecological knowledge','Long-developed knowledge of Country, species, seasons and relationships is described by this term.','Traditional ecological knowledge.'],
        ['Cultural heritage assessment','Identifying and protecting significant places and values uses this process.','A cultural heritage assessment.'],
        ['Stakeholder','A person or group affected by or able to influence a decision is this.','A stakeholder.'],
        ['Intergenerational equity','Fairness between present and future people is this sustainability principle.','Intergenerational equity.'],
        ['Social licence','Ongoing community acceptance beyond formal legal approval is known as this.','Social licence to operate.']
      ])
    ]
  };
})();

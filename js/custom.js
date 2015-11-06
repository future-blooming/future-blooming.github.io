function changediv()
{
	txtarea = document.getElementById("txtarea");
	output = document.getElementById("output");
	if (txtarea.value=="")
	    output.innerHTML = '<span class="grey ital">Expect Output here<span>'
	else
	    output.innerHTML = txtarea.value
}

function dataObj()
{
    return {"KNOWLEDGE":["Write", "List", "Label", "Name", "State", "Define", "Count", "Describe", "Draw", "Find", "Identify", "Match", 
                        "Quote", "Recall", "Recite", "Sequence", "Tell", "Arrange", "Duplicate", "Memorize", "Order", "Outline", 
                        "Recognize", "Relate", "Repeat", "Reproduce", "Select", "Choose", "Copy", "How", "Listen", "Locate",
						"Memorise", "Observe", "Omit", "Read", "Recognise", "Record", "Remember", "Retell", "Show", "Spell",
						"Trace", "What", "When", "Where", "Which", "Who", "Why"],
          "COMPREHENSION":["Explain", "Summarize", "Paraphrase", "Describe", "Illustrate", "Conclude", "Demonstrate", "Discuss",
						   "Generalize", "Identify", "Interpret", "Predict", "Report", "Restate", "Review", "Tell", "Classify",
						   "Convert", "Defend", "Distinguish", "Estimate", "Express", "Extend", "Give example", "Indicate",
						   "Infer", "Locate", "Recognize", "Rewrite", "Select", "Translate", "Ask", "Cite", "Compare",
						   "Contrast", "Generalise", "Give examples", "Match", "Observe", "Outline", "Purpose", "Relate",
						   "Rephrase", "Show", "Summarise"],
          "APPLICATION":["Use", "Compute", "Solve", "Demonstrate", "Apply", "Construct", "Change", "Choose", "Dramatize", "Interview",
						 "Prepare", "Produce", "Select", "Show", "Transfer", "Discover", "Employ", "Illustrate",
						 "Interpret", "Manipulate","Modify", "Operate", "Practice", "Predict", "Relate schedule", "Sketch",
						 "Use write", "Act", "Administer", "Associate", "Build", "Calculate", "Categorise", "Classify",
						 "Connect", "Correlation", "Develop", "Dramatise", "Experiment", "With", "Group", "Identify",
						 "Link", "Make use of", "Model", "Organise", "Perform", "Plan", "Relate", "Represent", "Simulate",
						 "Summarise", "Teach", "Translate"],
          "ANALYSIS":["Analyse", "Categorize", "Compare", "Contrast", "Separate", "Characterize", "Classify", "Debate", "Deduce", 
					  "Diagram", "Differentiate", "Discriminate", "Distinguish", "Examine", "Outline", "Relate", "Research", 
					  "Appraise", "Breakdown", "Calculate", "Criticize", "Derive", "Experiment", "Identify", "Illustrate", 
					  "Infer", "Interpret", "Model", "Outline", "Point out", "Question", "Select", "Subdivide", "Test", 
					  "Arrange", "Assumption", "Categorise", "Cause and", "Effect", "Choose", "Difference", "Discover", 
					  "Dissect", "Distinction", "Divide", "Establish", "Find", "Focus", "Function", "Group", "Highlight", 
					  "In-depth", "Discussion", "Inference", "Inspect", "Investigate", "Isolate", "List", "Motive", "Omit", 
					  "Order", "Organise", "Point out", "Prioritize", "Rank", "Reason", "Relationships", "Reorganise", "See", 
					  "Similar to", "Simplify", "Survey", "Take part in", "Test for", "Theme", "Comparing"],
          "SYNTHESIS":["Create", "Design", "Hypothesize", "Invent", "Develop", "Compose", "Construct", "Integrate", "Make",
					   "Organize", "Perform", "Plan", "Produce", "Propose", "Rewrite", "Arrange", "Assemble", "Categorize", 
					   "Collect", "Combine", "Comply", "Devise", "Explain", "Formulate", "Generate", "Prepare", "Rearrange",
					   "Reconstruct", "Relate", "Reorganize", "Revise", "Set up", "Summarize", "Synthesize", "Tell", "Write", 
					   "Adapt", "Add to", "Build", "Change", "Choose", "Combine", "Compile", "Convert", "Delete", "Discover", 
					   "Discuss", "Elaborate", "Estimate", "Experiment", "Extend", "Happen", "Hypothesise", "Imagine",
					   "Improve", "Innovate", "Make up", "Maximise", "Minimise", "Model", "Modify", "Original", "Originate",
					   "Predict", "Reframe", "Simplify", "Solve", "Speculate", "Substitute", "Suppose", "Tabulate", "Test", 
					   "Theorise", "Think", "Transform", "Visualise"],
          "EVALUATION":["Judge", "Recommend", "Critique", "Justify", "Appraise", "Argue", "Assess", "Choose", "Conclude", 
						"Decide", "Evaluate", "Predict", "Prioritize", "Prove", "Rank", "Rate", "Select", "Attach", "Compare", 
						"Contrast", "Defend", "Describe", "Discriminate", "Estimate", "Explain", "Interpret", "Relate",
						"Summarize", "Support", "Value", "Agree", "Award", "Bad", "Consider", "Convince", "Criteria", 
						"Criticise", "Debate", "Deduct", "Determine", "Disprove", "Dispute", "Effective", "Give reasons", "Good",
						"Grade", "How do we", "Know", "Importance", "Infer", "Influence", "Mark", "Measure", "Opinion", 
						"Perceive", "Persuade", "Prioritise", "Rule on", "Test", "Useful", "Validate", "Why"]
          }
}

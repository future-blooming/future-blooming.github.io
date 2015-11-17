function changediv()
{
	txtarea = document.getElementById("txtarea");
	output = document.getElementById("output");
	level = document.getElementById("level");
	if (txtarea.value=="")
	{    
	    output.innerHTML = '<span class="grey ital">Expect Output here<span>'
	    level.innerHTML = '0'
	}
	else
	{
	    inputdata = txtarea.value.replace(/\n/g,' \n ').replace(/\r/g,' \n ')
	    inputdata = txtarea.value.replace(/\?/g,' ?').replace(/\./g,' .')
	    splits = inputdata.split(' ')
	    list = dataObj()
	    
	    finalvalue = 0
	    totalwords = 0
	    
	    for(var i=0;i<splits.length;i++)
	    {
	        var word = splits[i]
	        if (word.indexOf('<span class')>=0) 
	            word = word.substring(word.indexOf('>')+1,word.lastIndexOf('<'))
	        for (var key in list)
	        {
	            for (var j = 0; j<list[key].length;j++)
	            {
	                
	                if (list[key][j].toLowerCase() == word.toLowerCase())
	                {
	                    var fillvalue = "<span class='"+key+"' title='Belongs to the "+key+" domain'>"+word+"</span>"
	                    splits[i] = fillvalue
	                    finalvalue += getValue(key)
	                    totalwords += 1 
	                }
	            }
	        }
	    }
	    data = splits.join(' ')
	    data = data.replace(/ \\n /g,'\n')
	    output.innerHTML = data
	    level.innerHTML = (totalwords!=0) ? (''+ Math.round(finalvalue * 100.0/ totalwords) / 100) : '0' ;
	}
}
function getValue(key)
{
    return {
            "knowledge":1,
            "comprehension":2,
            "application":3,
            "analysis":4,
            "synthesis":5,
            "evaluation":6
           }[key]
}
function dataObj()
{
    return {"knowledge":["Write", "List", "Label", "Name", "State", "Define", "Count", "Describe", "Draw", "Find", "Identify", "Match", 
                        "Quote", "Mention", "Recall", "Recite", "Sequence", "Tell", "Arrange", "Duplicate", "Memorize", "Order", "Outline", 
                        "Recognize", "Relate", "Repeat", "Reproduce", "Select", "Choose", "Copy", "How", "Listen", "Locate",
						"Memorise", "Observe", "Omit", "Read", "Recognise", "Record", "Remember", "Retell", "Show", "Spell",
						"Trace", "What", "When", "Where", "Which", "Who", "Why"],
          "comprehension":["Explain", "Summarize", "Paraphrase", "Describe", "Illustrate", "Conclude", "Demonstrate", "Discuss",
						   "Generalize", "Identify", "Interpret", "Predict", "Report", "Restate", "Review", "Tell", "Classify",
						   "Convert", "Defend", "Distinguish", "Estimate", "Express", "Extend", "Give example", "Indicate",
						   "Infer", "Locate", "Recognize", "Rewrite", "Select", "Translate", "Ask", "Cite", "Compare",
						   "Contrast", "Generalise", "Give examples","Give", "Match", "Observe", "Outline", "Purpose", "Relate",
						   "Rephrase", "Show", "Summarise"],
          "application":["Use", "Compute", "Solve", "Demonstrate", "Apply", "Can", "Construct", "Change", "Choose", "Dramatize", "Interview",
						 "Prepare", "Produce", "Select", "Show", "Transfer", "Discover", "Employ", "Illustrate",
						 "Interpret", "Manipulate","Modify", "Operate", "Practice", "Predict", "Relate schedule", "Sketch",
						 "write", "Act", "Administer", "Associate", "Build", "Calculate", "Categorise", "Classify",
						 "Connect", "Correlation", "Develop", "Dramatise", "Experiment", "With", "Group", "Identify",
						 "Link", "Make use of", "Model", "Organise", "Perform", "Pick", "Plan", "Relate", "Represent", "Simulate",
						 "Summarise", "Teach", "Translate", "Would"],
          "analysis":["Analyse", "Analyze", "Categorize", "Compare", "Contrast", "Separate", "Characterize", "Classify", "Debate", "Deduce", 
					  "Diagram", "Differentiate", "Discriminate", "Distinguish", "Examine", "Outline", "Relate", "Research", 
					  "Appraise", "Breakdown", "Calculate", "Complete", "Criticize", "Derive", "Experiment", "Identify", "Illustrate", 
					  "Infer", "Interpret", "Model", "Outline", "Point out", "Question", "Select", "Subdivide", "Test", 
					  "Arrange", "Assumption", "Categorise", "Cause and", "Effect", "Choose", "Difference", "Discover", 
					  "Dissect", "Distinction", "Divide", "Establish", "Find", "Focus", "Function", "Group", "Highlight", 
					  "In-depth", "Discussion", "Inference", "Inspect", "Investigate", "Isolate", "Motive", "Omit", 
					  "Order", "Organise", "Point out", "Prioritize", "Rank", "Reason", "Relationships", "Reorganise", "See", 
					  "Similar to", "Simplify", "Survey", "Take part in", "Test for", "Theme", "Comparing"],
          "synthesis":["Create", "Complete", "Design", "Hypothesize", "Invent", "Develop", "Compose", "Comment", "Construct", "Integrate", "Make",
					   "Organize", "Perform", "Plan", "Produce", "Propose", "Rewrite", "Arrange", "Assemble", "Categorize", 
					   "Collect", "Combine", "Comply", "Devise", "Explain", "Formulate", "Generate", "Prepare", "Rearrange",
					   "Reconstruct", "Relate", "Reorganize", "Revise", "Set up", "Summarize", "Synthesize", "Tell", "Write", 
					   "Adapt", "Add to", "Build", "Change", "Choose", "Combine", "Compile", "Convert", "Delete", "Discover", 
					   "Discuss", "Elaborate", "Estimate", "Experiment", "Extend", "Happen", "Hypothesise", "Imagine",
					   "Improve", "Innovate", "Make up", "Maximise", "Minimise", "Model", "Modify", "Original", "Originate",
					   "Predict", "Reframe", "Simplify", "Solve", "Speculate", "Substitute", "Suppose", "Tabulate", "Test", 
					   "Theorise", "Think", "Transform", "Visualise"],
          "evaluation":["Judge", "Recommend", "Critique", "Comment", "Justify", "Appraise", "Argue", "Assess", "Choose", "Code", "Conclude", 
						"Decide", "Evaluate", "Predict", "Prioritize", "Prove", "Rank", "Rate", "Select", "Attach", "Compare", 
						"Contrast", "Defend", "Describe", "Discriminate", "Estimate", "Explain", "Interpret", "Relate",
						"Summarize", "Support", "Value", "Valuate", "Agree", "Award", "Bad", "Consider", "Convince", "Criteria", 
						"Criticise", "Debate", "Deduct", "Determine", "Disprove", "Dispute", "Effective", "Give", "Give reasons", "Good",
						"Grade", "How do we", "Know", "Importance", "Infer", "Influence", "Mark", "Measure", "Opinion", 
						"Perceive", "Persuade", "Prioritise", "Rule on", "Test", "Useful", "Validate", "Why"]
          }
}

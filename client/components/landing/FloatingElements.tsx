// Code Line Component
const CodeLine = ({ text, className = "", animationDelay = "0s" }) => {
  return (
    <div
      className="font-mono text-xs whitespace-nowrap"
      style={{ animationDelay }}
    >
      <span className="text-lime-accent/10">{">"}</span>{" "}
      <span className={"text-white opacity-10 hover:opacity-20 transition-opacity " + className}>{text}</span>
    </div>
  );
};

// Code Column Component
const CodeColumn = ({ lines, speed, className, delay = "0s" }) => {
  return (
    <div
      className={`absolute flex flex-col space-y-1 ${className} ${speed}`}
      style={{ animationDelay: delay }}
    >
      {lines.map((line, index) => (
        <CodeLine
          key={index}
          text={line}
          animationDelay={`${index * 0.1}s`}
        />
      ))}
    </div>
  );
};

export default function FloatingElements() {
  // AI/Immigration related code snippets
  const codeSnippets1 = [
    "const processVisa = async (application) => {",
    "  const aiAnalysis = await analyzeDocuments(docs);",
    "  if (aiAnalysis.score > 0.85) {",
    "    return approveApplication(application);",
    "  }",
    "  return requestAdditionalInfo();",
    "};",
    "",
    "class ImmigrationAI {",
    "  constructor(model) {",
    "    this.nlpModel = model;",
    "    this.confidence = 0.95;",
    "  }",
    "",
    "  async validateForm(data) {",
    "    const predictions = await this.predict(data);",
    "    return predictions.filter(p => p.score > 0.8);",
    "  }",
    "}",
  ];

  const codeSnippets2 = [
    "import { AIProcessor } from './immigration-ai';",
    "",
    "const handleCase = (caseData) => {",
    "  const processor = new AIProcessor({",
    "    language: 'multilingual',",
    "    accuracy: 0.97",
    "  });",
    "",
    "  return processor.analyze(caseData)",
    "    .then(result => {",
    "      if (result.recommendation === 'APPROVE') {",
    "        return generateApprovalLetter(result);",
    "      }",
    "      return scheduleInterview(result);",
    "    })",
    "    .catch(handleError);",
    "};",
  ];

  const codeSnippets3 = [
    "// Machine Learning Pipeline",
    "const trainModel = async () => {",
    "  const dataset = await loadImmigrationData();",
    "  const features = extractFeatures(dataset);",
    "",
    "  const model = new NeuralNetwork({",
    "    layers: [512, 256, 128, 64, 1],",
    "    activation: 'relu',",
    "    optimizer: 'adam'",
    "  });",
    "",
    "  await model.train(features, {",
    "    epochs: 1000,",
    "    batchSize: 32,",
    "    validationSplit: 0.2",
    "  });",
    "",
    "  return model.save('./immigration-model');",
    "};",
  ];

  const codeSnippets4 = [
    "export const processApplication = {",
    "  validate: (data) => schema.validate(data),",
    "  predict: (data) => aiModel.predict(data),",
    "  approve: (id) => database.updateStatus(id, 'APPROVED'),",
    "  notify: (user) => emailService.send(user.email)",
    "};",
    "",
    "const automateWorkflow = async (application) => {",
    "  try {",
    "    const validation = await processApplication.validate(application);",
    "    if (!validation.isValid) throw new Error('Invalid data');",
    "",
    "    const prediction = await processApplication.predict(application);",
    "    console.log(`AI Confidence: ${prediction.confidence}%`);",
    "",
    "    if (prediction.confidence > 90) {",
    "      await processApplication.approve(application.id);",
    "      await processApplication.notify(application.user);",
    "    }",
    "  } catch (error) {",
    "    console.error('Processing failed:', error);",
    "  }",
    "};",
    "",
    "// Real-time processing queue",
    "const queueProcessor = {",
    "  queue: new PriorityQueue(),",
    "  isProcessing: false,",
    "",
    "  async start() {",
    "    this.isProcessing = true;",
    "    while (this.isProcessing) {",
    "      const task = await this.queue.dequeue();",
    "      if (task) await this.processTask(task);",
    "      await sleep(100);",
    "    }",
    "  },",
    "",
    "  async processTask(task) {",
    "    const startTime = Date.now();",
    "    try {",
    "      const result = await this.runAIAnalysis(task);",
    "      await this.saveResults(result);",
    "      console.log(`Task completed in ${Date.now() - startTime}ms`);",
    "    } catch (err) {",
    "      await this.handleTaskError(task, err);",
    "    }",
    "  }",
    "};",
  ];

  const codeSnippets5 = [
    "// Database connection pool",
    "const dbConfig = {",
    "  host: process.env.DB_HOST,",
    "  port: 5432,",
    "  database: 'immigration_ai',",
    "  user: process.env.DB_USER,",
    "  password: process.env.DB_PASS,",
    "  ssl: { rejectUnauthorized: false },",
    "  pool: { min: 2, max: 20 }",
    "};",
    "",
    "class DatabaseManager {",
    "  constructor(config) {",
    "    this.pool = new Pool(config);",
    "    this.connected = false;",
    "  }",
    "",
    "  async connect() {",
    "    try {",
    "      await this.pool.connect();",
    "      this.connected = true;",
    "      console.log('Database connected successfully');",
    "    } catch (error) {",
    "      console.error('Database connection failed:', error);",
    "      throw error;",
    "    }",
    "  }",
    "",
    "  async query(sql, params = []) {",
    "    const client = await this.pool.connect();",
    "    try {",
    "      const result = await client.query(sql, params);",
    "      return result.rows;",
    "    } finally {",
    "      client.release();",
    "    }",
    "  }",
    "",
    "  async transaction(callback) {",
    "    const client = await this.pool.connect();",
    "    try {",
    "      await client.query('BEGIN');",
    "      const result = await callback(client);",
    "      await client.query('COMMIT');",
    "      return result;",
    "    } catch (error) {",
    "      await client.query('ROLLBACK');",
    "      throw error;",
    "    } finally {",
    "      client.release();",
    "    }",
    "  }",
    "}",
  ];

  const codeSnippets6 = [
    "// API Rate limiting and security",
    "const rateLimiter = rateLimit({",
    "  windowMs: 15 * 60 * 1000, // 15 minutes",
    "  max: 100, // limit each IP to 100 requests per windowMs",
    "  message: 'Too many requests from this IP'",
    "});",
    "",
    "app.use('/api/', rateLimiter);",
    "app.use(helmet());",
    "app.use(cors({ origin: process.env.ALLOWED_ORIGINS }));",
    "",
    "// JWT token validation middleware",
    "const authenticateToken = (req, res, next) => {",
    "  const authHeader = req.headers['authorization'];",
    "  const token = authHeader && authHeader.split(' ')[1];",
    "",
    "  if (!token) {",
    "    return res.sendStatus(401);",
    "  }",
    "",
    "  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {",
    "    if (err) return res.sendStatus(403);",
    "    req.user = user;",
    "    next();",
    "  });",
    "};",
    "",
    "// Secure file upload handling",
    "const upload = multer({",
    "  dest: 'uploads/',",
    "  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit",
    "  fileFilter: (req, file, cb) => {",
    "    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];",
    "    if (allowedTypes.includes(file.mimetype)) {",
    "      cb(null, true);",
    "    } else {",
    "      cb(new Error('Invalid file type'), false);",
    "    }",
    "  }",
    "});",
    "",
    "app.post('/upload', authenticateToken, upload.single('document'), (req, res) => {",
    "  if (!req.file) {",
    "    return res.status(400).json({ error: 'No file uploaded' });",
    "  }",
    "  // Process the uploaded document with AI",
    "  processDocument(req.file.path);",
    "  res.json({ success: true, fileId: req.file.filename });",
    "});",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Far Left Column */}
      <CodeColumn
        lines={codeSnippets1}
        speed="animate-code-scroll-fast"
        className="left-4 top-20 w-96 opacity-6"
        delay="0s"
      />

      {/* Left Column */}
      <CodeColumn
        lines={codeSnippets5}
        speed="animate-code-scroll-fast"
        className="left-20 top-60 w-[30rem] opacity-5"
        delay="8s"
      />

      {/* Center Left Column */}
      <CodeColumn
        lines={codeSnippets2}
        speed="animate-code-scroll-fast"
        className="left-1/4 top-40 w-[30rem] opacity-7"
        delay="2s"
      />

      {/* Center Column */}
      <CodeColumn
        lines={codeSnippets6}
        speed="animate-code-scroll-fast"
        className="left-1/2 top-0 w-96 -translate-x-1/2 opacity-8"
        delay="5s"
      />

      {/* Center Right Column */}
      <CodeColumn
        lines={codeSnippets3}
        speed="animate-code-scroll-fast"
        className="right-1/4 top-10 w-96 opacity-6"
        delay="1s"
      />

      {/* Right Column */}
      <CodeColumn
        lines={codeSnippets4}
        speed="animate-code-scroll-fast"
        className="right-20 top-60 w-[26rem] opacity-5"
        delay="3s"
      />

      {/* Far Right Column */}
      <CodeColumn
        lines={codeSnippets1.slice(10, 25)}
        speed="animate-code-scroll-fast"
        className="right-4 top-20 w-80 opacity-4"
        delay="6s"
      />

      {/* Additional Background Columns for Maximum Density */}
      <CodeColumn
        lines={codeSnippets1.slice(0, 15)}
        speed="animate-code-scroll-fast"
        className="left-1/3 top-80 w-80 opacity-3"
        delay="4s"
      />

      <CodeColumn
        lines={codeSnippets2.slice(5, 20)}
        speed="animate-code-scroll-fast"
        className="left-12 bottom-20 w-[26rem] opacity-2"
        delay="1.5s"
      />

      <CodeColumn
        lines={codeSnippets3.slice(8, 23)}
        speed="animate-code-scroll-fast"
        className="right-12 bottom-40 w-96 opacity-3"
        delay="7s"
      />

      <CodeColumn
        lines={codeSnippets5.slice(0, 18)}
        speed="animate-code-scroll-fast"
        className="right-1/3 top-100 w-[28rem] opacity-2"
        delay="9s"
      />

      {/* Extra columns for more density and speed */}
      <CodeColumn
        lines={codeSnippets4}
        speed="animate-code-scroll-fast"
        className="left-1/5 top-10 w-80 opacity-4"
        delay="2.5s"
      />
      <CodeColumn
        lines={codeSnippets6}
        speed="animate-code-scroll-fast"
        className="right-1/5 bottom-10 w-80 opacity-4"
        delay="3.5s"
      />
      <CodeColumn
        lines={codeSnippets2}
        speed="animate-code-scroll-fast"
        className="left-1/6 top-1/2 w-72 opacity-3"
        delay="1.2s"
      />
      <CodeColumn
        lines={codeSnippets3}
        speed="animate-code-scroll-fast"
        className="right-1/6 bottom-1/2 w-72 opacity-3"
        delay="2.2s"
      />
    </div>
  );
}

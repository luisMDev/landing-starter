export const ConsoleCodeModel = `
 
<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">import</span></span></span> { createClient } <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">from</span></span></span> <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"@libsql/client"</span></span></span>;
            
<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">const</span></span></span> client = createClient({
  <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">url</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"file:replica.db"</span></span></span>,
  <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">syncUrl</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"libsql://..."</span></span></span>,
  <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">authToken</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"..."</span></span></span>,
});

<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">const</span></span></span> result = <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">await</span></span></span> client.execute({
  <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">sql</span></span></span>: <span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"SELECT * FROM users WHERE id = ?"</span></span></span>,
  <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">args</span></span></span>: [<span class="hljs-number"><span class="hljs-number"><span class="hljs-number">1</span></span></span>],
});
`;

import{_ as e,c as t,o as a,e as i}from"./app.a2c63123.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"双亲委派机制","slug":"双亲委派机制","link":"#双亲委派机制","children":[]},{"level":2,"title":"沙箱安全机制","slug":"沙箱安全机制","link":"#沙箱安全机制","children":[]}],"relativePath":"serverSide/双亲委派机制-沙箱安全机制.md"}'),c={name:"serverSide/双亲委派机制-沙箱安全机制.md"},n=i('<h2 id="双亲委派机制" tabindex="-1">双亲委派机制 <a class="header-anchor" href="#双亲委派机制" aria-hidden="true">#</a></h2><p>1)如果一个类加载器收到了类加载请求，它并不会自己先去加载，而是把这个请求委托给父类的加载器去执行; 2)如果父类加载器还存在其父类加载器，则进一步向上委托，依次递归,请求最终将到达顶层的启动类加载器; 3)如果父类加载器可以完成类加载任务，就成功返回，倘若父类加载器无法完成此加载任务，子加载器才会尝试自己去加载，这就是双亲委派模式<img src="https://pic.imgdb.cn/item/63e752054757feff337274b5.png" alt="d51489e2a31e3fb6159c62ce932bd45.png"></p><blockquote><p>案例 自己写一个String类，在main方法中创建String类，自定义的String类中static方法并未执行说明加载的String类并非自己定义的String类 <img src="https://pic.imgdb.cn/item/63e752064757feff337274cc.png" alt="334f881c799203ecc684dae3c8a364d.png"><img src="https://pic.imgdb.cn/item/63e752064757feff337274f0.png" alt="90d0dfb6eb6611667b89b9edb4c54a4.png"></p></blockquote><h2 id="沙箱安全机制" tabindex="-1">沙箱安全机制 <a class="header-anchor" href="#沙箱安全机制" aria-hidden="true">#</a></h2><p>自定义string类，但是在加载自定义string类的时候会率先使用引导类加载器加载，而引导类加载器在加载的过程中会先加载idk自带的文件(rt.jar包中java\\lang\\string.class)，报错信息说没有main方法就是因为加载的是rt.jar包中的string类。这样可以保证对java核心源代码的保护，这就是沙箱安全机制。</p><blockquote><p><img src="https://pic.imgdb.cn/item/63e752064757feff3372753d.png" alt="7fe44302988fabaa6963ae9a82322da.png"><img src="https://pic.imgdb.cn/item/63e752064757feff33727563.png" alt="99cfd1e22eaefe38136dec2d058bd4c.png"></p></blockquote>',6),r=[n];function s(d,_,p,g,l,f){return a(),t("div",null,r)}const h=e(c,[["render",s]]);export{m as __pageData,h as default};
